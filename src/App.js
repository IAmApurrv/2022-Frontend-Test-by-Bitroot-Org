import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Model from './Model';
import './App.scss';

const App = () => {
    const [data, setData] = useState([]);
    const [modelOpen, setModelOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openModel = (post) => {
        setSelectedPost(post);
        setModelOpen(true);
    };

    const closeModel = () => {
        setSelectedPost(null);
        setModelOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/posts');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="App">
            <div className="container">
                <h1>2022 Frontend Test by Bitroot Org</h1>
                <div className="card-container">
                    {data.map((post) => (
                        <Card key={post.id} post={post} openModel={openModel} />
                    ))}
                </div>
            </div>
            <p>Apurrv</p>
            {modelOpen && <Model post={selectedPost} closeModel={closeModel} />}
        </div>
    );
};

export default App;
