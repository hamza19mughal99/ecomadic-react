import React from 'react';
import { FaLeaf, FaPeopleCarry } from 'react-icons/fa'
import { Checkbox } from '@chakra-ui/react'

const Sustainable = () => {
    return (
        <div className={'form_container'}>
            <div className='sustainable_head'>
                <h3>Sustainable Amenities</h3>

                <div className={'sustainable'}>
                    <div>
                        <div className={'environmental'}>
                            <div className={'leaf'}> <FaLeaf /> </div>
                            <p>Environmental</p>
                        </div>
                        <div className={'environmental_checkbox'}>
                            <div>
                                <Checkbox> Environmentally Conscious </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Energy Efficient </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Water Efficient </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Water Management </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Responsible Sourcing </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'environmental'}>
                            <div className='group'><FaPeopleCarry /></div>
                            <p>Social</p>
                        </div>
                        <div className={'environmental_checkbox'}>
                            <div>
                                <Checkbox> Inclusive of Local People </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Embraces Culture & Heritage </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Local Ownership </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Local Hiring </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Supportive Work Environment & Culture </Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'environmental'}>
                        <div className='group'><FaPeopleCarry /></div>
                        <p>Social</p>
                    </div>
                    <div className={'environmental_checkbox'}>
                        <div>
                            <Checkbox> Supports the Local Economy </Checkbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sustainable;