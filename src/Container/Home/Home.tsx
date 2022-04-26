import React, {useState} from 'react';
import {Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react';
import {MdLocationOn} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {BsFillCalendarDayFill, BsPeopleFill} from "react-icons/bs";
import {AiOutlineArrowRight, AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import popular1 from "../../images/popular_1.jpg";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [guestShow, setGuestShow] = useState(false)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [pets, setPets] = useState(0)

    const SubmitHandler = () => {
        navigate('/listings')
    }

    const modal = (
        <Modal size={'sm'} onClose={() => setGuestShow(false)} isOpen={guestShow} >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className={'guests_modal'}>
                        <p> Adults </p>
                        <div className={'inc_dec'}>
                            <AiOutlineMinusCircle onClick={() => setAdults(adults - 1)} />
                            <input name="quantity" disabled type="text" className="quantity__input" value={adults} />
                            <AiOutlinePlusCircle onClick={() => setAdults(adults + 1)} />
                        </div>
                    </div>
                    <div className={'guests_modal'}>
                        <p> Children </p>
                        <div className={'inc_dec'}>
                            <AiOutlineMinusCircle onClick={() => setChildren(children - 1)} />
                            <input name="quantity" disabled type="text" className="quantity__input" value={children} />
                            <AiOutlinePlusCircle onClick={() => setChildren(children + 1)} />
                        </div>
                    </div>
                    <div className={'guests_modal'}>
                        <p> Pets </p>
                        <div className={'inc_dec'}>
                            <AiOutlineMinusCircle onClick={() => setPets(pets - 1)} />
                            <input name="quantity" disabled type="text" className="quantity__input" value={pets} />
                            <AiOutlinePlusCircle onClick={() => setPets(pets + 1)} />
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <React.Fragment>
            {modal}
            <div className={'section1'}>
                <div className={'text_section'}>
                    <p>Marketplace for local & sustainable travel businesses</p>
                    <h1>WHERE WOULD YOU LIKE TO GO?</h1>

                    <form onSubmit={SubmitHandler}>
                    <div className={'input_fields'}>
                        <div className={'location_input'}>
                            <MdLocationOn />
                            <input type='text'  placeholder={'Where are you going?'} />
                        </div>
                        <div className={'location_input'}>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={'location_input'}>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={'location_input1'}>
                            <BsPeopleFill />
                            <input onClick={() => setGuestShow(true)} style={{width: '80px', cursor: 'pointer' }} type='text'  placeholder={'Add guests'} />
                        </div>
                        <div className={'input_btn'}>
                            <button type={'submit'}> <AiOutlineArrowRight /></button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

            <div className={'container main_popular'}>
                <p>Most popular destinations</p>

                <div className={'popular_img'}>
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />
                </div>
            </div>
        </React.Fragment>
    );
};
export default Home;