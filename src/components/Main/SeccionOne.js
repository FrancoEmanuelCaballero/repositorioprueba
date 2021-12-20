import SideNavbar from './SideNavbar';

const VideoHeader = ({ embedId }) => (
    <div className="video-responsive">

    <iframe 
    // width="80%" 
    // height="auto" 
    src="https://www.youtube.com/embed/KmLMaf6nc3o" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

    </div>
  );


const SectionOne = () => {
    return(
        <section className='col'>
            <div className='row'>
                <SideNavbar className="col"/>
                <div className='videoIntro col'>
                    <VideoHeader/>
                </div>
            </div>
        </section>
    );
}

export default SectionOne;