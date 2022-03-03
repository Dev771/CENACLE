import React , { useState, useEffect }from 'react';
import './mobilesearch.css';
import {TextField} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../../actions/post';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Right = ({searchClose}) => {

    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(0);
    const query = useQuery();
    const page = query.get('page') || 1;
    const history = useNavigate();
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [active , setactive] = useState(true);


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
      
    const searchPost = () => {
        searchClose();
    if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
        history('/');
    }
    };

      const handleAddChip = (tag) => setTags([...tags, tag]);

      const handleDeleteChip = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    return (
        <div>
            <div className="right1">
                <div className="search1">
                        <div className="headings">
                            <h4>search</h4><i className="uil uil-edit"></i>
                        </div>

                        <div className="category">
                            <h6 className={active ?  "active" : " "} onClick={() => setactive (!active)}type="button">By Posts</h6>
                            <h6 className={active ?  " " : "active"} onClick={() => setactive (!active) }>By tags</h6>

                        </div>
                        <div className="search-bar">
                            <i className="uil uil-search"></i>
                            {active ? (
                                <TextField 
                                id="messages-search"
                                name="search" 
                                placeholder='Search posts'
                                onKeyPress={handleKeyPress}
                                fullWidth 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)}
                                />

                            ):(
                                <ChipInput
                                id="messages-search"
                                value={tags}
                                onAdd={handleAddChip}
                                onDelete={handleDeleteChip}
                                placeholder="Search tags"
                                />
                            )}
                        </div>
                        <div className="buttonS">
                            <button onClick={searchPost} className="btn btn-primary">
                            search
                            </button>
                        </div>                            
                </div>
            </div> 
        </div>
    )
}

export default Right
