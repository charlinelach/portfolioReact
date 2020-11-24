import React from "react";

function Alert(props) {
    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                {props.children} You sent a message!
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alert;
