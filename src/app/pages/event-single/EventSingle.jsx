import React from 'react';
import EventSingleRight from "./EventSingleRight";
import eventSingleStyles from './event-single.module.sass'
import topImg from "../../../assets/event/04.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faClock, faLocationDot, faReply} from "@fortawesome/free-solid-svg-icons";
import comment1 from "../../../assets/event/comment/comment-01.jpg"

export default function EventSingle(props) {

    return (
        <div className={eventSingleStyles.container}>
            <div className={eventSingleStyles.left}>
                <article className={eventSingleStyles.article}>
                    <img src={topImg} alt="" className={eventSingleStyles.articleTopImg}/>
                    <div className={eventSingleStyles.itemContent}>
                        <div className={eventSingleStyles.metaItems}>
                            <FontAwesomeIcon icon={faCalendarDays} color={"#5b83cd"}/>
                            <span className={eventSingleStyles.data}>March 12, 2018</span>
                            <FontAwesomeIcon icon={faLocationDot} color={"#5b83cd"}/>
                            <span className={eventSingleStyles.data}>Consetetur Sadipscing Eitr</span>
                            <FontAwesomeIcon icon={faClock} color={"#5b83cd"}/>
                            <span className={eventSingleStyles.data}>01:15 pm - 05:30 pm</span>
                        </div>
                        <hr/>
                        <div className={eventSingleStyles.content}>
                            <p className={eventSingleStyles.excerpt}>
                                At vero eos accusam justo duo dolores et rebum clita
                                kasd gubergren nosea takimata sanctus est dolor sit amet
                            </p>
                            <p>
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor amet
                                consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt.
                            </p>
                            <ul className={eventSingleStyles.styledList}>
                                <li>Consetetur sadipscing elitr, sed diam nonumy</li>
                                <li>Eirmod tempor invidunt ut labore</li>
                                <li>Dolore magna aliquyam erat</li>
                                <li>Sed diam voluptua. At vero eos accusam</li>
                            </ul>
                            <p>
                                At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctusamet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat.
                            </p>
                        </div>
                    </div>
                </article>
                <div className={eventSingleStyles.comments}>
                    <h4 className={eventSingleStyles.commentsTitle}>Comments</h4>
                    <ol className={eventSingleStyles.commentList}>
                        <li className={eventSingleStyles.comment}>
                            <div className={eventSingleStyles.commentBody}>
                                <div className={eventSingleStyles.commentImgContainer}>
                                    <img src={comment1} alt=""/>
                                </div>
                                <div className={eventSingleStyles.commentContent}>
                                    <b>
                                        <a href="#" rel="nofollow" className={eventSingleStyles.commentNameLink}>Chole
                                            Denverou</a>
                                        <span className={eventSingleStyles.commentMetadata}>
                                            <a href="#">
                                            <time dateTime="2018-03-14T07:57:01+00:00">
                                                March 14, 2018
                                            </time>
                                        </a>
                                        </span>
                                    </b>
                                    <p className={eventSingleStyles.commentText}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    </p>
                                </div>
                                <div className={eventSingleStyles.replyIcon}>
                                    <FontAwesomeIcon icon={faReply}/>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <EventSingleRight/>
        </div>
    );
}
