import React from "react";
import { connect } from "react-redux";

const DCandidates = (props) => {
    return ( <div>From DCandidates</div> );
}

const mapStateToProps = state => {
    return {
        dCandidateList: state.dCandidate.list
    }
}

export default connect()(DCandidates);