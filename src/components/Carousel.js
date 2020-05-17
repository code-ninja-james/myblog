import React from 'react';

import Card from '../components/Card';

import blog from '../assets/images/blog.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Medium',
                    subTitle: 'My blog.',
                    imgSrc: blog,
                    link: 'https://medium.com/@githinjijameson/unit-testing-in-javascript-f796d3fede10',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Jameson Githinji',
                    subTitle: 'Linkedin',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/jameson-githinji-9a2394163',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A graphql-typescript starter kit',
                    imgSrc: github,
                    link: 'https://github.com/code-ninja-james/jim_graphql-ts-server-boilerplate',
                    selected: false
                },
               
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;