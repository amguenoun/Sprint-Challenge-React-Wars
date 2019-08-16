import React from "react";
import Loader from 'react-loader-spinner'

export default class App extends React.Component {
    //other logic
    render() {
        return (
            <Loader
                type="Rings"
                color="#fff"
                height={50}
                width={50}
            />
        );
    }
}