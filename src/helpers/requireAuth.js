import React from "react"
import {connect} from "react-redux";

export default function (Childcomponent) {
    class RequireAuth extends React.Component{
        componentWillMount(){
            if(!this.props.isLoggIn){
                this.props.history.push("/")
            }
        };
        componentWillUpdate(nextProps) {
            if(!nextProps.isLoggIn){
                this.props.history.push("/")
            }
        }
        render() {
            return <Childcomponent/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLoggIn: state.authentification.isLoggIn
        }
    }
    return connect(mapStateToProps) (RequireAuth);
}
