/*let fnVal = (name) => { console.log(name);}
fnVal("pragya");
const str = "pragya";*/

var React = require('react');
var ReactDom = require('react-dom');
class TestModule extends React.Component {
    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
        </div>
    }
}
ReactDom.render(<TestModule title="React" description="React is maintained by Facebook!"/>, document.getElementById('react-container'));
