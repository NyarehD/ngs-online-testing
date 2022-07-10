import React, {useRef, useState} from "react";
import Isotope from "isotope-layout"
import galleryStyle from "./gallery.module.sass"
import image1 from "../../../assets/gallery-list/01.jpg"
import image2 from "../../../assets/gallery-list/02.jpg"
import image3 from "../../../assets/gallery-list/03.jpg"
import image4 from "../../../assets/gallery-list/04.jpg"
import image5 from "../../../assets/gallery-list/05.jpg"
import image6 from "../../../assets/gallery-list/06.jpg"
import image7 from "../../../assets/gallery-list/07.jpg"
import image8 from "../../../assets/gallery-list/08.jpg"
import image9 from "../../../assets/gallery-list/09.jpg"
import image10 from "../../../assets/gallery-list/10.jpg"
import image11 from "../../../assets/gallery-list/11.jpg"
import image12 from "../../../assets/gallery-list/12.jpg"

export default function Gallery() {
    const filterDefault = [
        {label: "all", isChecked: true},
        {label: "voip", isChecked: false},
        {label: "technologies", isChecked: false},
        {label: "internet", isChecked: false},
        {label: "cable", isChecked: false},
        {label: "iptv", isChecked: false}
    ]
    const galleryData = [
        {
            label: "voip",
            filter: ["voip", "internet"],
            img: image1,
            description: "Lorem bwa hahaha"
        },
        {
            label: "technologies",
            filter: ["cable", "technologies"],
            img: image2,
            description: "Lorem bwa hahaha"
        },
        {
            label: "iptv",
            filter: ["iptv", "internet", "cable"],
            img: image3,
            description: "Lorem bwa hahaha"
        },
        {
            label: "voip",
            filter: ["voip", "iptv"],
            img: image4,
            description: "Lorem bwa hahaha"
        },
        {
            label: "technologies",
            filter: ["technologies", "cable"],
            img: image5,
            description: "Lorem bwa hahaha"
        },
        {
            label: "voip",
            filter: ["iptv", "internet", "technologies"],
            img: image6,
            description: "Lorem bwa hahaha"
        },
        {
            label: "voip",
            filter: ["voip", "iptv", "technologies"],
            img: image7,
            description: "Lorem bwa hahaha"
        },
        {
            label: "iptv",
            filter: ["voip", "internet"],
            img: image8,
            description: "Lorem bwa hahaha"
        },
        {
            label: "voip",
            filter: ["cable", "technologies"],
            img: image9,
            description: "Lorem bwa hahaha"
        },
        {
            label: "iptv",
            filter: ["iptv", "internet", "internet"],
            img: image10,
            description: "Lorem bwa hahaha"
        },
        {
            label: "cable",
            filter: ["voip", "iptv"],
            img: image11,
            description: "Lorem bwa hahaha"
        },
        {
            label: "voip",
            filter: ["voip", "internet"],
            img: image12,
            description: "Lorem bwa hahaha"
        },
    ]
    /**
     * The looped card components
     * @type {}
     */
    const cardComponents = galleryData.map((item, index) => {
        let initialClass = "";
        const classes = `${galleryStyle.card}${item.filter.reduce((previousValue, currentValue) => previousValue + " " + currentValue, "")} card`

        return (
            <div className={classes} key={`galleryItem${index}`}>
                <img src={item.img} alt=""/>
                <div className={galleryStyle.itemContent}>
                    <p>{item.label}</p>
                    <h5><a href="#" className={galleryStyle}>{item.description}</a></h5>
                </div>
            </div>
        )
    })

    const [filters, setFilter] = useState(filterDefault);
    const [key, setKey] = useState("all");

    const isotope = useRef()
    const onFilter = (event) => {
        event.preventDefault()
        const currentFilter = event.target.innerText.toLowerCase()
        setKey(currentFilter);
        setFilter(prevState => {
            return prevState.map(item => {
                item.isChecked = item.label === currentFilter;
                return item;
            })
        })
    }
    React.useEffect(() => {
        isotope.current = new Isotope(".galleryRow", {
            itemSelector: ".card",
            layoutMode: "fitRows",
        })
        return () => {
            isotope.current.destroy()
        }
    }, [])
    React.useEffect(() => {
        key === "all" ? isotope.current.arrange({filter: `*`}) : isotope.current.arrange({filter: `.${key}`})
    }, [key])
    return (
        <div className={galleryStyle.container}>
            <div className={galleryStyle.rowFilter}>
                <div className={galleryStyle.filter}>
                    {filters.map((item, index) => {
                        const aa = item.isChecked ? galleryStyle.active : "";
                        return (
                            <a href="#" key={`${item.label}${index}`} onClick={onFilter} value={item.label}
                               className={aa}>{item.label}</a>
                        )
                    })}
                </div>
            </div>
            <div className={`${galleryStyle.galleryRow} galleryRow`}>
                {cardComponents}
            </div>

        </div>
    )
}
