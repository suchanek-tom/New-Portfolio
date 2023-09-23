import {useState} from "react"
import data from "./data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/pagination';

const SLider = () =>{

    const [projectList, setProjectList] = useState(data)

    return(
        <div className=" relative h-full">
            <Swiper
                slidesPerView={1}
                spaceBetween={45}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className=" carousel-item card w-80 lg:w-96 h-full bg-base-300 py-3 px-2"
                style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "0.5",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "3px"
                }}
            >
            {projectList.map((oneProject) => {
                const { id, image, title, description, link} = oneProject
                return(
                    <div key={id} className="">
                        <SwiperSlide className=" items-center justify-center" key={id}>
                            <figure className="">
                                <img src={image} alt="image" className=" w-full"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p className="">{description}</p>
                                    <div className="card-actions justify-end">
                                    <a
                                        className="btn btn-primary mt-4"
                                        href={link}
                                        target="blank"
                                    >
                                        Visit
                                    </a>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                )
            })

            }
            </Swiper>
        </div>
    )
}

export default SLider