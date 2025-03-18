import React, { useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

extend({ TextureLoader });

const images = [
    "https://cdn.prod.website-files.com/65de4c6f8dc17dc010f8ac55/65de4e8fa9dea47849bfe182_654d5b61a2e2c9c8d6cdeae7_5f57c46384cca65e79589acf_students1.jpeg",
    "https://images.hindustantimes.com/img/2022/03/01/550x309/810f9178-991f-11ec-82cf-231c0ab4e0db_1646112217565.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDfgmIzb3cODhjNPxFh6mGbmjCF8PraLE-g&s",
    "https://5.imimg.com/data5/SZ/MR/AG/SELLER-7019504/mbbs-bds-admission-2018-500x500.png",
    "https://urfu.ru/fileadmin/_processed_/c/5/csm_6W5A2332_bb5c7288f0.jpg",
    "https://www.scholarshipsads.com/files/2016/05/3_5.jpg",
    "https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LOjWek-C3QzvqFYEAZPqow4ExDGquOSvZg&s"
];

const fallbackImage = "/fallback.gif";

export default function GalleryPage() {
    const [validImages, setValidImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(fallbackImage);

    useEffect(() => {
        const checkImage = (url) =>
            new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => resolve(fallbackImage);
            });

        const validateAllImages = async () => {
            const checkedImages = await Promise.all(images.map((img) => checkImage(img)));
            setValidImages(checkedImages);
            setSelectedImage(checkedImages[0]);
        };

        validateAllImages();
    }, []);

    return (
        <div className="font-roboto flex flex-col items-center justify-center text-gray-800 p-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold mb-2">Our Photo <span className="text-red-600">Gallery</span></h1>
                <p className="text-lg text-gray-600">Explore moments from student life in Russia.</p>
            </div>

            {/* 3D Canvas with Frame & Image */}
            <motion.div className="relative w-[380px] lg:w-[600px] h-[400px] mb-6">
                {/* Border Frame */}
                <img
                    src="https://static.vecteezy.com/system/resources/previews/034/866/047/non_2x/ai-generated-sakura-border-frame-gold-luxury-transparent-background-free-png.png"
                    className="absolute w-full h-full object-cover pointer-events-none z-10"
                    alt="Border Frame"
                />

                {/* 3D Image Canvas */}
                <Canvas camera={{ position: [0, 0, 3] }}>
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 2]} />
                    <Image3D texture={selectedImage} />
                </Canvas>
            </motion.div>

            {/* Image Slider */}
            <ImageSlider images={validImages} onSelect={setSelectedImage} />
        </div>
    );
}

function Image3D({ texture }) {
    const [tex, setTex] = useState(null);

    useEffect(() => {
        const loader = new TextureLoader();
        loader.load(texture, setTex, undefined, () => loader.load(fallbackImage, setTex));
    }, [texture]);

    if (!tex) return null;

    return (
        <mesh scale={[2, 1.5, 0.1]}>
            <boxGeometry args={[2, 1.5, 0.1]} />
            <meshStandardMaterial map={tex} />
        </mesh>
    );
}

function ImageSlider({ images, onSelect }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: { perView: 6, spacing: 10 },
        breakpoints: {
            "(min-width: 1024px)": { slides: { perView: 6, spacing: 10 } },
            "(min-width: 768px)": { slides: { perView: 5, spacing: 10 } },
            "(max-width: 767px)": { slides: { perView: 1, spacing: 10 } },
        },
        created: (slider) => slider.update(),
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.update();
        }
    }, [images]);

    return (
        <div className="relative w-full max-w-7xl">
            {/* Slider Container */}
            <div ref={sliderRef} className="keen-slider">
                {images.map((img, index) => (
                    <div key={index} className="keen-slider__slide flex justify-center relative">
                        {/* Frame & Image Container */}
                        <div className="relative w-80 h-96 lg:w-96 lg:h-80 flex justify-center items-center">
                            {/* Wooden Frame Image */}
                            <img
                                src="https://png.pngtree.com/png-vector/20230923/ourmid/pngtree-wooden-frame-border-png-image_10122148.png"
                                alt="Wooden Frame"
                                className="absolute w-full h-full object-cover pointer-events-none z-10"
                            />

                            {/* Image Inside the Frame */}
                            <motion.img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className="absolute w-[85%] h-[85%] lg:w-[78%] lg:h-[78%] object-cover rounded-md cursor-pointer shadow-lg transition-transform hover:scale-105 z-0"
                                onClick={() => onSelect(img)}
                                whileTap={{ scale: 0.9 }}
                                onError={(e) => (e.target.src = fallbackImage)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
