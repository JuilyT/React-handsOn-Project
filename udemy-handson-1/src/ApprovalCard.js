import React from 'react';

const ApprovalCard = (props) => {
    return(
        <div className="ui card">
            <div className="content">Are you sure ?</div>
            {props.children}
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve
                    </div>
                    <div className="ui basic red button">reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;