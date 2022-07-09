import React , { useEffect, useState }from 'react';
import '../../HomeBody/search.css';
import { TextField , Avatar } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { getPostsBySearch } from '../../../actions/post';
import { Topuser } from '../../../actions/User';




const Mleft = () => {
    
    const User = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }, navigate));
        navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        setSearch('');
    } else {
        navigate('/');
    }
    };

      const handleAddChip = (tag) => setTags([...tags, tag]);

      const handleDeleteChip = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    useEffect( () => {
        dispatch(Topuser());
    },[]);

  return (
    <div style={{gap: "10px"}}>
        <div className="left" style={{marginBottom: "20px"}}>
        {User ? (
                    <span className="profile" onClick={() => navigate(`/Profile/${User?.result?._id || User?.result?.googleId}`)}>
                        <div className="profile-picture">
                        {User?.result.imageURL ? 
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageURL} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                :
                                <Avatar style={{ width: '40px', height: '40px'}} alt={User?.result.name} src={User?.result?.imageUrl} >
                                {User?.result.name.charAt(0)}
                                </Avatar>
                                }
                        </div>
                        <div className="handle">
                            <h4>{User?.result?.name}</h4>
                            <label className="text-muted">
                                @{User?.result?.name}
                            </label>
                        </div>
                    </span> 
                    ) : (
                    <></>
                )}
        </div>
        <div className="right rightnone">
                <div className="search1 Userlist">
                <div className="headings">
                    <h4>Nalle User</h4><i className="uil uil-user-plus"></i>
                </div> 
                <div className="search-bar">
                        <i className="uil uil-search"></i>
                        {active ? (
                                <TextField 
                                id="messages-search"
                                name="search" 
                                placeholder='Search users'
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
                {!users.length  ? (<></>) :  (
                    users.map((user) => (
                        <div className="search1 Userlist Deetsz" onClick={() => navigate(`/Profile/${user?._id}`)}>
                        <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={user?.name} src={user?.imageURL} >{user?.name.charAt(0)}
                        </Avatar>
                        <strong className='primaryC'>{user?.name}</strong>
                        <div>:{user?.Total_Post_Like}CP </div> 
                    </div>
                    ))
                )}     
            </div>
            
        </div> 
    </div>
  )
}

export default Mleft