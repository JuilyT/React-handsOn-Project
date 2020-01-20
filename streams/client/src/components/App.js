import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamList from '../streams/streamList';
import StreamCreate from '../streams/streamCreate';
import StreamShow from '../streams/streamShow';
import StreamEdit from '../streams/streamEdit';
import StreamDelete from '../streams/streamdelete';
import Header from '../components/header';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={StreamList}></Route>
                    <Route path='/streams/new' component={StreamCreate}></Route>
                    <Route path='/streams/edit' component={StreamEdit}></Route>
                    <Route path='/streams/delete' component={StreamDelete}></Route>
                    <Route path='/streams/show' component={StreamShow}></Route>        
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;