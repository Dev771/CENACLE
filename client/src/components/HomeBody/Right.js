import React , { useEffect, useState }from 'react';
import './search.css';
import { TextField , Avatar } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { getPostsBySearch } from '../../actions/post';
import { Topuser } from '../../actions/User';


const Right = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [active , setactive] = useState(true);
    const users = useSelector((state) => state.Users);


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          searchPost();
          setSearch('');
        }
      };
      
    const searchPost = () => {
    if ((search.trim() || tags) && (search.length>0 || tags.length>0)) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }, history));
        history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        setSearch('');
    } else {
        history('/');
    }
    };

      const handleAddChip = (tag) => setTags([...tags, tag]);

      const handleDeleteChip = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    useEffect( () => {
        dispatch(Topuser());
    },[]);


    return (
        <div>
            <div className="right rightnone">
                    <div className="search1 Userlist">
                    <div className="headings">
                        <h4>Top Nalle User</h4><i className="uil uil-user-plus"></i>
                    </div> 
                    {!users.length  ? (<></>) :  (
                        users.map((user) => (
                            <div className="search1 Userlist Deetsz">
                            <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={user?.name} src={user?.imageURL} >{user?.name.charAt(0)}
                            </Avatar>
                            <strong className='primaryC'>{user?.name}</strong>
                            <div>:{user?.Total_Post_Like}CP </div> 
                           </div>
                        ))
                    )}     
                    
                    {/* <div className="search1 Userlist Deetsz">
                     <strong className='primaryC'>Manthan nakli rajput</strong>
                     <div>: 69CP </div> 
                    </div><div className="search1 Userlist Deetsz">
                     <strong className='primaryC'>Tushar sundriyal</strong>
                     <div>: 25CP </div> 
                    </div><div className="search1 Userlist Deetsz">
                     <strong className='primaryC'>Dev Garg</strong>
                     <div>: 6.9CP </div> 
                    </div><div className="search1 Userlist Deetsz">
                     <strong className='primaryC'>Toshiet Daksh</strong>
                     <div>: 69CP </div> 
                    </div> */}
                   </div>
                
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
                <div className="CreatorName">
                   <div>
                Made with Love <i class="uil uil-heart" style={{color : "red"}}></i> <br />
                by &nbsp;
                   <a href="https://www.linkedin.com/in/dev-garg-a5b012182/" className='linkden'>Dev G </a> &nbsp; | &nbsp;
                   <a href="https://www.linkedin.com/in/naman-bhateja-018392171/" className='linkden'>Naman B </a> &nbsp;| &nbsp;
                   <a href="https://www.linkedin.com/in/heygaurav07/" className='linkden'>Gaurav S </a>   
                   </div>
                   <div className='copyright'><i class="uil uil-copyright"></i>Copyright: Cenacle Tech Lab</div>
                </div>   
            </div> 
        </div>
    )
}

export default Right
