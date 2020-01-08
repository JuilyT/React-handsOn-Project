import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    const comments = [
        {
            name: 'sam',
            date: 'Todat at 6:00PM',
            comment: 'Fab job'
        },
        {
            name: 'loren',
            date: 'Tomorrow at 7:00PM',
            comment: 'keep it up'
        }
    ];
    const items = []

    for (const [index, value] of comments.entries()) {
      items.push(
        <ApprovalCard>
            <CommentDetail key={index} name={value.name} date={value.date} comment={value.comment} avatar={faker.image.avatar()}/>
        </ApprovalCard>
        )
    }
    return (
        <div className="ui container comments">
            {items}
        </div>
    );
}
ReactDOM.render(<App></App>, document.querySelector('#root'));