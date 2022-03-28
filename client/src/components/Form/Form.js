import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';

import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, TextField } from '@material-ui/core';
import { PostAdd, Photo, Link, List } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { getTags } from '../../actions/Tag';
import { createPost } from '../../actions/post';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import './Styles.css';
import useStyles from './Styles';

const Form = () => {
    const [activebutton, setactiveButton] = useState('Images');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const tags = useSelector((state) => state.tags);
    const [postData, setPostData] = useState({title: '', LocImage: '', tags_name: '', tags_type: '', creator: '', creatorEmail: '', post_Type: activebutton, post_Texts: '' })
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        
        accept: 'image/*, video/*',
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    });

    const images = files.map((file) => (
        <div key={file.name}>
            <img style={{ maxHeight: '300px'}} src={file.preview} alt={file.name} />
        </div>
    ))

    useEffect(() => {
        dispatch(getTags());
        if(!user) {
            navigate('/')
        }
    }, [dispatch]);
    
    const clear = () => {
        setPostData({title: '', tags_name: '', tags_type: '', creator: '', creatorEmail: '', post_Type: '', post_Texts: '' });
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        
        dispatch(createPost({...postData, LocImage: files[0], creator: user?.result?.name, creatorEmail: user?.result?.email, post_Type: ''}, navigate));
        clear();
    }

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value});
    }

    const handleChangeImage = (e) => {
        console.log(e.target);
    }

    return (
        <div className='createForm'>
            <form  autoComplete='off' onSubmit={handleSubmit}>
                <div className='CreatePostTop'>
                    <label>Create a Post</label>
                </div>
                <hr style={{ width: '100%', height: '1px', color: 'Black' }} />
                <div className='chooseTag'>
                    <Autocomplete
                        id="Tags"
                        className={classes.Autocomplete}
                        classes={classes}
                        options={tags.sort()}
                        onSelect={(e) => setPostData({...postData, tags_name: e.target.value})}
                        renderInput={params => (
                            <TextField required className={classes.textfield} {...params} label="Post Type" variant="outlined" />
                        )}
                        onChange={(e) => setPostData({...postData, tagname: e.target.value})}
                        // groupBy={tags => tags.name}
                        getOptionLabel={option => option.name}
                        style={{ width: '130px', border: '1px solid #fff2', background: 'white', borderRadius: '5px' }}
                    />
                    <TextField 
                        required 
                        className={classes.textfield} 
                        style={{fontSize: '10px' , background : 'white'}}  
                        label="Tag Name"  
                        variant="outlined"
                        onChange={handleChange}
                        name="tags_type"
                    />
                </div>
                <div className='cP'>
                    <ButtonGroup style={{ width: '100%' }} className='ButtonGroup'>
                        <button type='button' className={activebutton === 'Images' ? 'focusClass' : ''} onClick={() => setactiveButton('Images')}><Photo />Image and Video</button>
                        <button type='button' className={activebutton === 'Post' ? 'focusClass' : ''} onClick={() => setactiveButton('Post')}><PostAdd />Post</button>
                        <button type='button' className={activebutton === 'Link' ? 'focusClass' : ''} onClick={() => setactiveButton('Link')}><Link />Link</button>
                        <button type='button' className={activebutton === 'Poll' ? 'focusClass' : ''} onClick={() => setactiveButton('Poll')}><List />Poll</button>
                    </ButtonGroup>
                    <div className='Postdata'>
                        <div>
                            {activebutton === 'Post' ? (
                                <>
                                    <input name='title' type='text' required placeholder='Enter Title' onChange={handleChange}  />
                                    <div className='editablediv'>
                                        <div contentEditable > Coming Soon</div>
                                    </div>
                                </>
                            ) : activebutton === 'Images' ? (
                                <>
                                    <input name='title' type='text' required placeholder='Enter Title' onChange={handleChange} />
                                    <div style={{ position: 'relative'}}>
                                        <div {...getRootProps()} className='DragAndDrop'>
                                            <input {...getInputProps()} accept='image/*, video/*' />
                                            <p>{!files.length ? (
                                                <label>Here</label>
                                            ) : (
                                                <div>{images}</div>
                                            )}</p>
                                        </div>
                                    </div>
                                </>
                            ) : activebutton === 'Link' ? (
                                <label>Link</label>
                            ) : (
                                <label>Poll</label>
                            )}
                            <hr style={{ width: '100%', opacity: '.3' }} />
                            <div className='postDatabuttons'>
                                <button type='button'>Cancel</button>
                                <button type='Submit'>Create</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
            <div className='Rules'>
                <div style={{background: 'var(--color-white)'}} className='Instr'>
                    <ol>
                        <lh>Posting to Cenacle</lh>
                        <hr style={{ background: 'grey', width: '80%', height: '1px' }} />
                        <li>Remember the human</li>
                        <hr style={{ background: 'grey', width: '80%', height: '1px' }} />
                        <li>Behave like you would in real life</li>
                        <hr style={{ background: 'grey', width: '80%', height: '1px' }} />
                        <li>Look for the original source of content</li>
                        <hr style={{ background: 'grey', width: '80%', height: '1px' }} />
                        <li>Search for duplicates before posting</li>
                        <hr style={{ background: 'grey', width: '80%', height: '1px' }} />
                        <li>Read the community’s rules</li>
                    </ol>
                </div>
                <div className="CreatorName">
                   <div>
                Made with Love <i class="uil uil-heart" style={{color : "red"}}></i> <br />
                by &nbsp;
                   <a href="https://www.linkedin.com/in/dev-garg-a5b012182/" className='linkden'>Dev G </a> &nbsp; | &nbsp;
                   <a href="https://www.linkedin.com/in/naman-bhateja-018392171/" className='linkden'>Naman B </a> &nbsp;| &nbsp;
                   <a href="https://www.linkedin.com/in/heygaurav07/" className='linkden'>Gaurav S </a>   
                   </div>
                   <div className='copyright' style={{padding : " 3px"}}><i class="uil uil-copyright"></i>Copyright: Cenacle Tech Lab</div>
                   <div className='contactUs'>Wanna conatct us? <br />Email: cenacletechlab@gmail.com</div>
                </div> 
            </div>
        </div>
    )
}

export default Form
