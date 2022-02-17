import React , {useState} from 'react'
import Profile1 from '../../img/Profile1.jpg'
import ChipInput from 'material-ui-chip-input';
import { TextField , Button } from '@material-ui/core';
import { useLocation ,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import './styleS.css';
import { getPostsBySearch } from '../../actions/post';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Right = () => {

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [active, setactive] = useState(true);
    const navigate = useNavigate();
    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const dispatch = useDispatch();
    



    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };

    const searchPost = () => {
    if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
        navigate('/');
    }
    };


    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));


    return (
        <div>
            <div className="right">
                        <div className="search1">
                                <div className="headings">
                                    <h4>Search</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                   <h6 className={active ? 'active' : '' }><input type="button"  value="By Posts"  onClick={() => setactive(!active)} style={{background : "transparent"}}/> </h6>
                                   <h6 className={active ? '' : 'active' }><input type="button"  value="By Tags"  onClick={() => setactive(!active)} style={{background : "transparent"}}/> </h6>
                            </div>
                            {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                <i className="uil uil-search"></i>
                                <TextField 
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
                                                <h5>Coming Soon!!</h5>
                                                <p className="text-muted">
                                                    8 mutual friends
                                                </p>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <button className="btn btn-Search">
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
                                    Coming Soon!!
                                </div>
                        </div>
                        
                    </div> 
        </div>
    )
}

export default Right
