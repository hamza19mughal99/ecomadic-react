import React from 'react';
import { Box, Flex, IconButton, useDisclosure, useColorModeValue, Stack, } from '@chakra-ui/react';
import {Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, onOpen, onClose } = useDisclosure();

    const changePage = (moveTo: string) => {
        switch (moveTo) {
            case 'login':
                window.location.href = '/login'
                break;
            case 'signUp':
                window.location.href = '/sign-up'
                break;
            case 'home':
                window.location.href = '/'
                break;
            case 'message':
                window.location.href = '/message'
                break;
        }
    }

    const thankYouModal = (
        <Modal size={'full'} onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody className='header_menu'>
                    <Stack as={'nav'}>
                        <h5 onClick={() => changePage('login')}> Login </h5>
                        <h5 onClick={() => changePage('signUp')}> Sign-up </h5>
                        <h5 onClick={() => changePage('home')}> Planned Trips </h5>
                        <h5 onClick={() => changePage('message')}> Messages </h5>
                        {/* <h5 onClick={() => changePage('profile')}> My Profile </h5> */}
                        {/* <h5 onClick={() => changePage('account')}> Account </h5> */}
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <>
            <div className='hamburger'>
                {thankYouModal}
            </div>
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                        <NavLink to={'/'}> <h5>ecomadic</h5> </NavLink>
                    </Flex>
                    <IconButton
                        size={'md'}
                        icon={<GiHamburgerMenu />}
                        aria-label={'Open Menu'}
                        display={{ md: 'block' }}
                        onClick={onOpen}
                    />
                </Flex>
            </Box>
        </>
    );
}