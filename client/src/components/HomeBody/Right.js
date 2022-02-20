import React , { useState, useEffect }from 'react';
import Profile1 from '../../img/Profile1.jpg';
import './search.css';
import { Container, Grow, Grid , Paper , TextField , AppBar ,Button , Chip} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useLocation, useNavigate } from 'react-router-dom';
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts ,  getPostsBySearch } from '../../actions/post';
// import Chip from '@mui/material/Chip';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import { Autocomplete } from '@material-ui/lab';


// import './styleS.css';
import { getPostsBySearch } from '../../actions/post';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Right = () => {

    // const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(0);
    const query = useQuery();
    const page = query.get('page') || 1;
    const history = useNavigate();
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
      
    const searchPost = () => {
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
            <div className="right">
                       <div className="search1">
                                <div className="headings">
                                    <h4>search</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                    <h6 className="active" type="button">By Posts</h6>
                                    <h6 >By tags</h6>

                            </div>
                             {/* <TextField 
                            name="search" 
                            variant="outlined" 
                            label="Search Memories"
                            onKeyPress={'handleKeyPress'}
                            fullWidth 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}
                            />  */}
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                <i className="uil uil-search"></i>
                                <TextField 
                                id="messages-search"
                                name="search" 
                                placeholder='Search posts'
                                onKeyPress={handleKeyPress}
                                fullWidth 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="search-bar">
                                <i className="uil uil-search"></i>
                                <ChipInput
                                id="messages-search"
                                value={tags}
                                onAdd={handleAddChip}
                                onDelete={handleDeleteChip}
                                placeholder="Search tags"
                                />
                            </div>
                            <div className="buttonS">
                                <button onClick={searchPost} className="btn btn-primary">
                                search
                                </button>
                            </div>
                            <Button onClick={searchPost}  variant="contained" color="primary">Search</Button>

                            
                        </div>

                                {/* <!----------------------------END OF MESSAGES---------------> */}
                                

                                {/* <!----------------------------FRIEND REQUESTS---------------> */}
                                <div className="friend-requests">
                                    <h4>Requests</h4>
                                    {/* <!--Request  1--> */}
                                    <div className="requests">
                                        <div className="info">
                                            <div className="profile-picture">
                                                <img src={Profile1} />
                                            </div>
                                            <div>
                                                <h5>Coming Soon</h5>
                                                <p className="text-muted">
                                                    8 mutual friends
                                                </p>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <button className="btn btn-primary">
                                                Accept
                                            </button>
                                            <button className="btn">
                                                Decline
                                            </button>
                                            </div>
                                    </div>
                                </div>
                                <div className="messages">
                                <div className="headings">
                                    <h4>Messages</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                    <i className="uil uil-search"></i>
                                    <input type="search" placeholder="search messages" id="messages-search" />
                            </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                    <h6 className="active">Primary</h6>
                                    <h6 >General</h6>
                                    <h6 className="message-requests">Request(7)</h6>
                            </div>
                            
                                {/* <!-----------------------------------MESSAGE--------------> */}
                                <div className="message">
                                Coming Soon    
                                </div>
                        </div>
                        
                    </div> 
        </div>
    )
}

export default Right
