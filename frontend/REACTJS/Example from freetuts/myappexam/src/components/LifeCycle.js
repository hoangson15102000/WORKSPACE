import React from "react";
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            clickedStatus: false,
            list: []
        };
    }
    componentWillMount() {
        console.log('Component will mount');
    }
    componentDidMount() {
        console.log('Component did mount');
        this.getList();
    }
    getList = () => {
        // // Call API ......
        // fetch('https://api.mydomain.com')
        //     .then(response => response.json())
        //     .then(data => this.setState({ list: data }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.list !== nextState.list;

    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update');
    }
    render() {
        return (
            <div>
                <h3>Mouting Method</h3>
            </div>
        )
    }
}
export default LifeCycle