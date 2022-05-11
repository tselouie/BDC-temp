import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
import Image from "next/image";
import { useState } from "react";
import Anchor from "@ui/anchor";
import SingleSlide from "./slide";
import placeholderImg from "../../../../public/images/banner/banner-sm-01.jpg";
import data from "./dogs.json";

const HeroArea = () => {
    const showMoreInfo = (e) => {
        const ele = document.getElementById(
            `banner-desc-${e.currentTarget.id}`
        );
        if (ele) {
            ele.classList.remove("hidden");
        }
    };
    const showLessInfo = (e) => {
        const ele = document.getElementById(
            `banner-desc-${e.currentTarget.id}`
        );
        if (ele) {
            ele.classList.add("hidden");
        }
    };
    return (
        <div className="container-fluid pb-5" id="bannerImg">
            <div className="row d-flex align-items-center mx-5 px-5">
                <div className="offset-lg-2 col-lg-8 col-sm-12 text-center ">
                    <h3
                        data-title={data.title}
                        className="title theme-gradient my-5 pt-5 customTitleFont justify-content-center col-12 "
                        style={{
                            fontSize: "7.5rem",
                        }}
                    >
                        {data.title}
                    </h3>
                </div>
            </div>

            <div className="row d-flex align-items-center px-5 mx-5">
                {data?.collections.map((dog) => (
                    <div className="col-lg-6 col-md-12 col-sm-12 text-left">
                        <div className="card bg-dark mb-3">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                                    <Image
                                        width={235}
                                        height={235}
                                        src={dog.image.src}
                                        className="card-img-center "
                                        alt="..."
                                    />
                                </div>
                                <div
                                    className="col-lg-8 col-md-8 col-sm-12"
                                    id={dog.id}
                                    onMouseEnter={(e) => {
                                        showMoreInfo(e);
                                    }}
                                    onMouseLeave={(e) => {
                                        showLessInfo(e);
                                    }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title customTitleFont customTitleStyle">
                                            {dog.title}
                                        </h5>
                                        <p
                                            id={`banner-desc-${dog.id}`}
                                            className="card-text hidden banner-desc"
                                        >
                                            {dog.description}
                                        </p>
                                        <Anchor
                                            path="#"
                                            className="border-bottom-4 "
                                            style={{
                                                fontSize: "2rem",
                                                borderBottom:
                                                    "2px solid yellow",
                                            }}
                                        >
                                            MORE INFO
                                        </Anchor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HeroArea;
