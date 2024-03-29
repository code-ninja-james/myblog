import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Jameson. I'm a fullstack software developer with knowledge of the automotive industry</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with Machine Learning and IOT</p>

            <p>My latest project,mobile app that displays the most popular public repositories using stars. You can check it out  <a href="https://github.com/code-ninja-james/githubstar" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with  TypeScript,Postgresql and redis.</p>

            <p>When I'm not learning something new chances are I'm writing in my blog. You can find it here <a href="https://medium.com/@githinjijameson/unit-testing-in-javascript-f796d3fede10" target="_blank" rel="noopener noreferrer">here</a></p>
            </Content>
        </div>
    );

}

export default AboutPage;
