import React from 'react';
import {Checkbox} from "@chakra-ui/react";

const Filters = () => {
    return (
            <div className={'form_container'}>
                <div className='sustainable_head'>
                    <h3>More Filters</h3>

                    <div>
                        <div className={'environmental'}>
                            <p>Accommodation Type</p>
                        </div>
                        <div className={'environmental_checkbox'}>
                            <div>
                                <Checkbox> Entire place </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Private bedroom </Checkbox>
                            </div>
                            <div>
                                <Checkbox> Shared bedroom </Checkbox>
                            </div>
                        </div>
                    </div>

                    <div className={'sustainable'}>
                        <div>
                            <div className={'environmental'}>
                                <p>Amenities</p>
                            </div>
                            <div className={'amenities_checkbox'}>
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
                    </div>
                </div>
            </div>
    );
};

export default Filters;
