import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <div name="home">
    <Particles
      id =  "tsparticles"
      init={particlesInit}
      Loaded={particlesLoaded}
      height={900}
      options={{
        "fullScreen": {
            "enable": false,
            "zIndex": -20
        },
        fpsLimit: 60,
        "particles": {
          color: {
              value: "#ffffff",
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
          },
          collisions: {
              enable: false,
          },
          move: {
              direction: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: {
                min: 3,
                max: 5
              },
              straight: false,
              maxSpeed: 4,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
        },
        "interactivity": {
          detectsOn: "canvas",
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4,
              },
          },
          resize: true,
      },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
      <div className="fuck">
        <h1>Hey there!😄<br />
        I'm <span className="teal">Andrew Blackmore</span>, <br />
        a Software Engineer from <br />
        Sydney, Australia.</h1>
      </div>
    </div>  
  )
}

export default Particle