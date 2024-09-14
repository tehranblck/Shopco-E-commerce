import React from 'react';
import { H2 } from '../new-arrivals/styled';
import { Container, Flex, Gray, Image, Image1, Image2, Text } from './styled';
import { useNavigate, useParams } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/shop/${category}`);
    };

    return (
        <Container>
            <Gray>
                <H2>Browse by dress style</H2>
                <Flex>
                    <Image1  onClick={() => handleCategoryClick('casual')}>
                        <Image src="/img/categories/casual.png" alt="" />
                        <Text>Casual</Text>
                    </Image1>
                    <Image2 onClick={() => handleCategoryClick('formal')}>
                        <Image src="/img/categories/formal.png" alt="" />
                        <Text>Formal</Text>
                    </Image2>
                </Flex>
                <Flex>
                    <Image2 onClick={() => handleCategoryClick('party')}>
                        <Image src="/img/categories/party.png" alt="" />
                        <Text>Party</Text>
                    </Image2>
                    <Image1 onClick={() => handleCategoryClick('sport')}>
                        <Image src="/img/categories/sport.png" alt="" />
                        <Text>Sport</Text>
                    </Image1>
                </Flex>
            </Gray>
        </Container>
    );
}

export default Categories;
