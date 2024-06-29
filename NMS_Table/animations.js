document.addEventListener('DOMContentLoaded', () => {
  const setupInteractivity = (playerId) => {
    const player = document.querySelector(playerId);
    player.addEventListener('ready', () => {
      const totalFrames = player.getLottie().totalFrames;

      LottieInteractivity.create({
        player: playerId,
        renderer: 'svg',
        mode: 'cursor',
        actions: [
          {
            position: { x: [0, 1], y: [-1, 2] },
            type: "seek",
            frames: [0, totalFrames - 1]
          },
          {
            position: { x: -1, y: -1 },
            type: 'loop',
            frames: [0, totalFrames - 1]
          }
        ]
      });
    });
  };
  ['#cu', '#cd', '#h3',`#Si`, `#p`,`#N`, `#Em`, `#Ag`, `#Fe`, `#Co`, `#Na`, `#NaCl`, `#C`, `#Co`, `#Rn`, `#In`, `#Au`, `#FePlus`, `#CoPlus`, `#NaPlus`, `#D`, `#Cl`, `#CPlus`, `#NH3`, `#Su`, `#Ch`, `#Pt`, `#FePlusPlus`, `#Py`, `#U`, `#Cy`, `#X`, `#Jn`, `#Pf`, `#O2`].forEach(setupInteractivity);
});