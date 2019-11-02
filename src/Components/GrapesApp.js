import React, { Component, useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import './App2.css';



class GrapesApp extends Component {
    constructor() {
        super();


    }

    componentDidMount() {
var editor = grapesjs.init({
            height: '100%',
            canvas:{
                styles:['/App2.css']
            },
            blockManager: {
                // options
              },
            showOffsets: 1,
            noticeOnUnload: 0,
            storageManager: { autoload: 0 },
            container: '#gjs',
            fromElement: true,
            plugins: ['gjs-preset-webpage'],
            pluginsOpts: {
            'gjs-preset-webpage': {}
            },
        });
       
        const blockManager = editor.BlockManager;

        blockManager.add("myForm",
        {
            label:"Myform",
            content: `<form class='employeeform'> 
            <h2> Employee Details</h2>
            <input type ='text' placeholder='Name'>
            <input type ='text' placeholder='Place'>
            <input type ='text' placeholder='Email'>
            <input type ='text' placeholder='Contact number'>
            <h2> Company Details</h2>

            <input type ='text' placeholder='Company Name'>
            <input type ='text' placeholder='Designaton'>
            <input type ='text' placeholder='Location'>
            <input type ='text' placeholder='Address'>
            <button> Submit </button>
            
            
            </form> ` ,
            category: 'Basic',
        })


    } // end of component did mount
    render() {
        // Replace this css with your css
        const external_styles = ".test {font-style:italic; margin:10px; text-align:center}";
        return (
            <div>
                <div id="blocks"> </div>

                </div>
        );
    }
}

export default GrapesApp;