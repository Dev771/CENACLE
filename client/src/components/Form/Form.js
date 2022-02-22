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
// import Draganddrop from './DragAndDrop/Draganddrop';
import './Styles.css';
import './DragAndDrop/styles.css';
import useStyles from './Styles';
import ImageUpload from './DragAndDrop/Draganddrop';

const Form = () => {
    const [activebutton, setactiveButton] = useState('Post');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const tags = useSelector((state) => state.tags);
    const [postData, setPostData] = useState({title: '', LocImage: '', tags_name: '', tags_type: '', creator: '', creatorEmail: '', post_Type: activebutton, post_Texts: '' })

    // const {
    //     getRootProps,
    //     getInputProps,
    //     isDragActive,
    //     isDragAccept,
    //     isDragReject
    //   } = useDropzone({
    //     accept: 'image/*,video/*'
    //   });

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        
        accept: 'image/*',
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
        // setPostData({ ...postData, LocImage: e.target.files[0]});
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
                        options={tags}
                        onSelect={(e) => setPostData({...postData, tags_name: e.target.value})}
                        renderInput={params => (
                            <TextField required className={classes.textfield}  {...params} label="Post Type" variant="outlined" />
                        )}
                        onChange={(e) => setPostData({...postData, tagname: e.target.value})}
                        getOptionLabel={option => option.name}
                        style={{ width: '130px', border: '1px solid #fff2', background: 'white', borderRadius: '5px' }}
                    />
                    <Autocomplete
                        id="Tags"
                        options={tags}
                        autoHighlight
                        onSelect={(e) => setPostData({...postData, tags_type: e.target.value})}
                        className={classes.Autocomplete}
                        renderInput={params => (
                            <TextField required className={classes.textfield} style={{fontSize: '10px'}} {...params} label="Tag Name"  variant="outlined" />
                        )}
                        style={{ width: 270, border: '1px solid #fff2', background: 'white', borderRadius: '5px', color : 'black' }}
                        getOptionLabel={option => option.tagtype}
                    />
                </div>
                <div className='cP'>
                    <ButtonGroup style={{ width: '100%' }} className='ButtonGroup'>
                        <button type='button' className={activebutton === 'Post' ? 'focusClass' : ''} onClick={() => setactiveButton('Post')}><PostAdd />Post</button>
                        <button type='button' className={activebutton === 'Images' ? 'focusClass' : ''} onClick={() => setactiveButton('Images')}><Photo />Image and Video</button>
                        <button type='button' className={activebutton === 'Link' ? 'focusClass' : ''} onClick={() => setactiveButton('Link')}><Link />Link</button>
                        <button type='button' className={activebutton === 'Poll' ? 'focusClass' : ''} onClick={() => setactiveButton('Poll')}><List />Poll</button>
                    </ButtonGroup>
                    <div className='Postdata'>
                        <div>
                            {activebutton === 'Post' ? (
                                <>
                                    <input name='title' type='text' required placeholder='Enter Title' onChange={handleChange}  />
                                    <div className='editablediv'>
                                        <div contentEditable ></div>
                                    </div>
                                </>
                            ) : activebutton === 'Images' ? (
                                <>
                                    <input name='title' type='text' required placeholder='Enter Title' onChange={handleChange} />
                                    {/* <input type='file' onChange={handleChangeImage} name='LocImage' accept="image/*, video/*" /> */}
                                    {/* <div className="container">
                                        <div {...getRootProps({className: "dropzone"})}>
                                            <input type='file' {...getInputProps()} name="LocImage" onChange={handleChangeImage} />
                                            {isDragAccept && (<p>All files will be accepted</p>)}
                                            {isDragReject && (<p>Some files will be rejected</p>)}
                                            {!isDragActive && (<p>Drop some files here ...</p>)}
                                        </div>
                                    </div> */}
                                    <div style={{ position: 'relative'}}>
                                        <div {...getRootProps()} className='DragAndDrop'>
                                            <input {...getInputProps()} />
                                            <p>{!files.length ? (
                                                <label>Here</label>
                                            ) : (
                                                <div>{images}</div>
                                            )}</p>
                                        </div>
                                    </div>



                                    {/* <ImageUpload addFile={addFile} files={files} /> */}

                                    {/* <div class="drag-area">
                                        <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                                        <header>Drag & Drop to Upload File</header>
                                        <span>OR</span>
                                        <button type='button'>Browse File</button>
                                        <input type="file" hidden />
                                    </div> */}

                                    {/* <Draganddrop /> */}
                                    {/* <FileBase name='LocImage' type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, LocImage: base64 })}  /> */}
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
                    <ul>
                        <lh>Posting to Reddit</lh>
                        <hr style={{ background: 'black', width: '80%', height: '1px' }} />
                        <li>Posting to Reddit</li>
                        <hr style={{ background: 'black', width: '80%', height: '1px' }} />
                        <li>Posting to Reddit</li>
                        <hr style={{ background: 'black', width: '80%', height: '1px' }} />
                        <li>Posting to Reddit</li>
                        <hr style={{ background: 'black', width: '80%', height: '1px' }} />
                        <li>Posting to Reddit</li>
                        <hr style={{ background: 'black', width: '80%', height: '1px' }} />
                        <li>Posting to Reddit</li>
                    </ul>
                </div>
                <div className='Instr'>
                    
                </div>
            </div>
        </div>
    )
}

export default Form
