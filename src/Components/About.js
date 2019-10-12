import React from 'react'
import LazyLoad from 'react-lazyload'

const About = () => (
  <section className='about'>
    <h2 className='heading'>
      About<LazyLoad height={15}><hr className='divider' /></LazyLoad>
    </h2>
    <div className='content'>
      <div className='portrait-container'>
        <LazyLoad height={150}>
          <div className='portrait' />
        </LazyLoad>
      </div>
      <div className='bio'>
        <p>
          Hi! I am a passionate frontend developer and recent university
          graduate based in California. I take pride in the fact that I enjoy
          challenges involving both logic and aesthetics. Everything I create
          should both be functional and appealing, and I love learning new
          things that equip me towards that end.
        </p>
        <br />
        <p>
          I also love hiking, animals, chess, and Jiu-Jitsu.
        </p>
      </div>
    </div>
    <div className='triangle'></div>
  </section>
)

export default About
