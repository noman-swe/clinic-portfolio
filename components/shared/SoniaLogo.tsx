import React from 'react';

export const SoniaLogo: React.FC = () => {
    return (
        <div className="flex items-center justify-center p-2">
            {/* Transparent, Scaled Wrapper (Sized smaller to fit neatly anywhere) */}
            <div className="relative w-full max-w-30 aspect-square flex items-center justify-center select-none bg-transparent">
                <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

                    {/* 1. THE BIG "H" (Background Layer) */}
                    <path
                        d="M 60 40 L 190 40 L 190 80 L 160 80 L 160 160 L 240 160 L 240 80 L 210 80 L 210 40 L 340 40 L 340 120 L 300 120 L 300 320 L 340 320 L 340 360 L 210 360 L 210 320 L 240 320 L 240 240 L 160 240 L 160 320 L 190 320 L 190 360 L 60 360 L 60 320 L 100 320 L 100 120 L 60 120 Z"
                        className="fill-[#10a361]"
                    />

                    {/* 2. THE LETTER "N" (Middle Layer) */}
                    <g className="fill-[#1d3d87] stroke-[3px] stroke-linejoin-round">
                        {/* Left Vertical Pillar */}
                        <path d="M 145 110 L 172 110 L 172 290 L 145 290 Z" />

                        {/* Right Vertical Pillar */}
                        <path d="M 228 110 L 255 110 L 255 290 L 228 290 Z" />

                        {/* Sharp Diagonal Stroke connecting the corners */}
                        <path d="M 145 110 L 175 110 L 255 290 L 225 290 Z" />
                    </g>

                    {/* 3. THE SPIRAL "S" (Foreground Layer - Animated with a Minimal Breathing Pulse) */}
                    <g className="animate-pulse duration-2000 ease-in-out">
                        {/* Outer White Outline for Separation */}
                        <path
                            d="M 180 85 C 140 50, 70 60, 75 110 C 80 150, 170 170, 140 230 C 110 280, 80 260, 90 320 C 95 350, 130 360, 150 360"
                            fill="none"
                            className="stroke-white"
                            strokeWidth="20"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        {/* Main Red Fluid Path */}
                        <path
                            d="M 180 85 C 140 50, 70 60, 75 110 C 80 150, 170 170, 140 230 C 110 280, 80 260, 90 320 C 95 350, 130 360, 150 360"
                            fill="none"
                            className="stroke-[#e62b2b]"
                            strokeWidth="14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>

                </svg>
            </div>
        </div>
    );
};

export default SoniaLogo;