import React , { useEffect, useState }from 'react';
import '../../HomeBody/search.css';
import { TextField , Avatar } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { getPostsBySearch } from '../../../actions/post';
import { AllUser } from '../../../actions/User';
import { converId } from '../../../actions/Message';




const Mleft = ({nuser}) => {
    
    const User = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Users, setUsers] = useState(JSON.parse(localStorage.getItem('profile')));
    const [active , setactive] = useState(true);
    const users = useSelector((state) => state.Users);
    // console.log(User)

    const handleClick = (user) => {
        console.log(user)
        dispatch(converId(Users?.data?._id, user?._id));
        nuser(user)
    }

    useEffect(() => {
        dispatch(AllUser());
    }, [])

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
                            ;    {User?.result.name.charAt(0)}
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
                {/* <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <TextField 
                            id="messages-search"
                            name="search" 
                            placeholder='Search users'
                            onKeyPress={() => {}}
                            fullWidth 
                            value={()=> {}} 
                            onChange={() => {}}
                        />
                    </div> */}
                {!users.length  ? (<></>) :  (
                    users.map((user) => (
                        <div className="search1 Userlist Deetsz" onClick={()=>handleClick(user)}>
                        <Avatar style={{ width: '40px', height: '40px', boxShadow : '0 0 5px black'}} alt={user?.name} src={user?.imageURL} >{user?.name.charAt(0)}
                        </Avatar>
                        <strong className='primaryC'>{user?.name}</strong>
                        {/* <div>:{user?.Total_Post_Like}CP </div>  */}
                    </div>
                    ))
                )}     
            </div>
            
        </div> 
    </div>
  )
}

export default Mleft