import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'reactstrap'

const Join = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ margin: "200px auto" }}>
          <form noValidate>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <Typography component="h1" variant="h5">
                          계정 생성
                      </Typography>
                  </Grid>

                  {/* <Grid item xs={12}>
                    <div className="thumbnail-box" onClick={() => $fileTag.current.click()}>
                      <img
                        // src={require("../../assets/img/image-add.png")}
                        src={imgFile ? imgFile : require("../../assets/img/image-add.png")}
                        // src={imgFile || require("../../assets/img/image-add.png")}
                        alt="profile"

                      />
                    </div>
                    <label className='signup-img-label' htmlFor='profile-img'>프로필 이미지 추가</label>
                    <input
                      id='profile-img'
                      type='file'
                      style={{display: 'none'}}
                      accept='image/*'
                      ref={$fileTag}
                      onChange={showThumbnailHandler}                  
                    />
                  </Grid> */}

                  <Grid item xs={12}>
                      <TextField
                          autoComplete="fname"
                          name="username"
                          variant="outlined"
                          required
                          fullWidth
                          id="username"
                          label="유저 이름"
                          autoFocus
                      />
                      <span></span>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="이메일 주소"
                          name="email"
                          autoComplete="email"
                      />
                      <span></span>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="패스워드"
                          type="password"
                          id="password"
                          autoComplete="current-password"                          
                      />
                      <span></span>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password-check"
                          label="패스워드 확인"
                          type="password"
                          id="password-check"
                          autoComplete="check-password"                          
                      />
                      <span id='check-span'></span>
                  </Grid>
                  <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{background: '#38d9a9'}}
                        // onClick={joinButtonClickHandler}
                      >
                          계정 생성
                      </Button>
                  </Grid>
              </Grid>
              {/* <Grid container justify="flex-end">
                  <Grid item>
                      <Link href="/login" variant="body2">
                          이미 계정이 있습니까? 로그인 하세요.
                      </Link>
                  </Grid>
              </Grid> */}
          </form>
      </Container>
  )
}

export default Join