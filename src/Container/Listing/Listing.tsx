import React, {useState} from 'react'
import {Grid, GridItem, Modal, ModalBody, ModalContent, ModalOverlay} from '@chakra-ui/react'
import PopularFind from './PopularFind/PopularFind';
import './Listing.css'
import { FaSearch } from 'react-icons/fa';
import {RiPlantFill} from 'react-icons/ri'
import AllListing from './AllListing/AllListing';
import {FaDollarSign,FaFilter} from 'react-icons/fa';
import {BsFillCalendarDayFill, BsPeopleFill} from "react-icons/bs";
import DatePicker from "react-datepicker";
import {MdLocationOn} from "react-icons/md";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import PriceRange from "../../ComponentsPages/PriceRange";
import Sustainable from "../../ComponentsPages/Sustainable";
import Filter from "../../ComponentsPages/Filter";

const Listing = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [listGuestShow, setListGuestShow] = useState(false)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [pets, setPets] = useState(0)
    const [priceModal, setPriceModal] = useState(false)
    const [sustainModal, setSustainModal] = useState(false)
    const [filterModal, setFilterModal] = useState(false)

    const modal = (
        <Modal size={'sm'} onClose={() => setListGuestShow(false)} isOpen={listGuestShow} >
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

    const price = (
        <Modal size={'lg'} onClose={() => setPriceModal(false)} isOpen={priceModal} >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <PriceRange />
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    const sustain = (
        <Modal size={'xl'} onClose={() => setSustainModal(false)} isOpen={sustainModal} >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Sustainable />
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    const filter = (
        <Modal size={'xl'} onClose={() => setFilterModal(false)} isOpen={filterModal} >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Filter />
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <React.Fragment>
            {modal}
            {price}
            {sustain}
            {filter}

            <div className={'filter_div'} >
                <div>
                    <div className='filter_container'>
                        <div className='border_right'>
                            <MdLocationOn />
                            <input type="text" placeholder='Chunbe Island,Terzania' />
                        </div>

                        <div className='border_right'>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='border_right'>
                            <BsPeopleFill />
                            <input onClick={() => setListGuestShow(true)} className={'guest_input'} type="text" placeholder='2 guests' />
                        </div>

                        <div className='search_container'> <FaSearch /> </div>

                    </div>
                </div>
                <div>
                    <div className='amenites_container'>
                        <div className='border_right dollar' onClick={() => setPriceModal(true)}>
                            <FaDollarSign />  Price
                        </div>

                        <div className='border_right sustain' onClick={() => setSustainModal(true)}>
                            <RiPlantFill/> Sustainable Amenities
                        </div>

                        <div className='filters' onClick={() => setFilterModal(true)}>
                            <FaFilter/>  More Filters
                        </div>
                    </div>
                </div>
            </div>

            <Grid templateColumns='repeat(12, 1fr)' margin={10} gap={4}>
                <GridItem colSpan={8} height={'100%'} >
                    <PopularFind />
                    <AllListing/>
                </GridItem>
                <GridItem colSpan={4} height={'100%'}>
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe width="100%" height="800" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder={0} scrolling="no"/><br />
                    </div>
                </GridItem>
            </Grid>
        </React.Fragment>
    )
}

export default Listing