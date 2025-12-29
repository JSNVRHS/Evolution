const levels = {
    easy: { cols: 4, rows: 4, time: 10, startItems: 4 },
    medium: { cols: 6, rows: 6, time: 15, startItems: 6 },
    hard: { cols: 8, rows: 8, time: 20, startItems: 8 }
  };
  
  let currentLevel = null;
  let score = 0;
  
  const evolutions = [
    {
        "name": "Scripting Evolution",
        "tooltip": "Scripting.png",
        "points": 5,
        "difficulty": "easy",
        "description": "The rise of scripting languages from basic JS to powerful full-stack frameworks.",
        "steps": [
            {
                "step": 1,
                "name": "JavaScript",
                "img": "js.png",
                "description": "A scripting language for web interactivity."
            },
            {
                "step": 2,
                "name": "jQuery",
                "img": "jquery.png",
                "description": "A library simplifying JavaScript development."
            },
            {
                "step": 3,
                "name": "Node.js",
                "img": "node.png",
                "description": "Brought JavaScript to the backend."
            },
            {
                "step": 4,
                "name": "Vue.js",
                "img": "vue.png",
                "description": "A progressive JavaScript framework for UI development."
            }, {
                "step": 5,
                "name": "React",
                "img": "react.png",
                "description": "React is a JavaScript library for building interactive user interfaces."
            },
            {
                "step": 6,
                "name": "Next.js",
                "img": "next js.png",
                "description": "A React framework optimized for performance."
            }
        ]
    },
    {
        "name": "Styling Technologies",
        "tooltip": "Styling.png",
        "points": 5,
        "difficulty": "easy",
        "description": "The evolution of styling from basic CSS to modern utility-first frameworks.",
        "steps": [
            {
                "step": 1,
                "name": "CSS",
                "img": "css.png",
                "description": "A basic styling language for web pages."
            },
            {
                "step": 2,
                "name": "CSS3",
                "img": "css3.png",
                "description": "Introduced advanced styling options like animations."
            },
            {
                "step": 3,
                "name": "Bootstrap",
                "img": "bootstrap.png",
                "description": "A framework for responsive web design."
            },
            {
                "step": 4,
                "name": "SASS",
                "img": "sass.png",
                "description": "A preprocessor adding variables and functions to CSS."
            }, {
                "step": 5,
                "name": "Material UI",
                "img": "material_ui.png",
                "description": "Material UI is a React-based UI framework following Google's Material Design principles."
            },
            {
                "step": 6,
                "name": "Tailwind",
                "img": "tailwind.png",
                "description": "A utility-first CSS framework for fast styling."
            }
        ]
    },
    {
        "name": "Markup Languages",
        "tooltip": "Markup.png",
        "points": 5,
        "difficulty": "easy",
        "description": "The evolution of markup languages from basic HTML to modern web structures.",
        "steps": [
            {
                "step": 1,
                "name": "HTML",
                "img": "HTML.png",
                "description": "The first version of HTML which containing only the basic tags."
            },
            {
                "step": 2,
                "name": "HTML 2",
                "img": "html2.png",
                "description": "The early version of HTML introduced basic markup for web pages."
            },
            {
                "step": 3,
                "name": "HTML 4",
                "img": "html4.png",
                "description": "HTML4 improved structure and added CSS support."
            },
            {
                "step": 4,
                "name": "XHTML",
                "img": "xhtml.png",
                "description": "A stricter version of HTML, following XML syntax rules."
            },
            {
                "step": 5,
                "name": "HTML5",
                "img": "html5.png",
                "description": "Introduced multimedia elements and APIs for modern web apps."
            },
            {
                "step": 6,
                "name": "HTML6",
                "img": "html6.png",
                "description": "The future of web markup, with enhanced capabilities."
            }
        ]
    },
    {
        "name": "C Language Evolution",
        "tooltip": "C language.png",
        "points": 10,
        "difficulty": "medium",
        "description": "The progress of C-based programming languages from C to modern .NET platforms.",
        "steps": [
            {
                "step": 1,
                "name": "C",
                "img": "c.png",
                "description": "A foundational programming language for system development."
            },
            {
                "step": 2,
                "name": "C++",
                "img": "cpp.png",
                "description": "Extended C with object-oriented programming features."
            },
            {
                "step": 3,
                "name": "C#",
                "img": "csharp.png",
                "description": "A Microsoft-developed language combining OOP and .NET features."
            },
            {
                "step": 4,
                "name": ".NET Framework",
                "img": "dotNet_FrameWork.png",
                "description": "A framework for running and developing applications on Windows."
            },
            {
                "step": 5,
                "name": ".NET Core",
                "img": "dotNet_core.png",
                "description": "A cross-platform version of .NET for modern cloud applications."
            },
            {
                "step": 6,
                "name": ".NET 5",
                "img": "dotNet5.png",
                "description": ".NET 5 is a unified, cross-platform framework merging .NET Core and .NET Framework."
            }
        ]
    },
    {
        "name": "IDE Evolution",
        "tooltip": "IDE.png",
        "points": 10,
        "difficulty": "medium",
        "description": "The progress of development environments from simple text editors to AI-powered IDEs.",
        "steps": [
            {
                "step": 1,
                "name": "Lotus Notes",
                "img": "lotus_notes.png",
                "description": "One of the earliest business application platforms."
            },
            {
                "step": 2,
                "name": "Vim",
                "img": "vim.png",
                "description": "A powerful, keyboard-centric text editor."
            },
            {
                "step": 3,
                "name": "Delphi",
                "img": "delphi.png",
                "description": "An early visual development environment for Windows."
            },
            {
                "step": 4,
                "name": "Eclipse",
                "img": "eclipse.png",
                "description": "A Java-focused open-source IDE."
            },
            {
                "step": 5,
                "name": "VS Code",
                "img": "vs_code.png",
                "description": "A lightweight yet powerful modern IDE."
            },
            {
                "step": 6,
                "name": "GitHub Copilot",
                "img": "copilot.png",
                "description": "GitHub Copilot is an AI-powered coding assistant that helps developers write code faster."
            }
        ]
    },
    {
        "name": "Audio Formats",
        "tooltip": "Audio.png",
        "points": 10,
        "difficulty": "medium",
        "description": "From early sound files to high-quality spatial audio formats.",
        "steps": [
            {
                "step": 1,
                "name": "MIDI",
                "img": "midi.png",
                "description": "A protocol for synthesizing and sequencing music."
            },
            {
                "step": 2,
                "name": "WAV",
                "img": "wav.png",
                "description": "A lossless, uncompressed audio file format."
            },
            {
                "step": 3,
                "name": "MP3",
                "img": "mp3.png",
                "description": "A compressed format revolutionizing digital music."
            }, {
                "step": 3,
                "name": "AAC",
                "img": "aac.png",
                "description": "AAC is an advanced audio codec offering better compression and quality than MP3."
            },
            {
                "step": 5,
                "name": "FLAC",
                "img": "flac.png",
                "description": "A lossless audio codec for high-fidelity sound."
            },
            {
                "step": 6,
                "name": "Spatial Audio",
                "img": "spatial_audio.png",
                "description": "3D audio technology for immersive experiences."
            }
        ]
    },
    {
        "name": "Video Formats",
        "tooltip": "Video.png",
        "points": 10,
        "difficulty": "medium",
        "description": "The transition from early video formats to high-definition and streaming solutions.",
        "steps": [
            {
                "step": 1,
                "name": "AVI",
                "img": "avi.png",
                "description": "One of the first video file formats, developed by Microsoft."
            },
            {
                "step": 2,
                "name": "MPEG",
                "img": "mpeg.png",
                "description": "A compressed video format standard for digital media."
            },
            {
                "step": 3,
                "name": "MP4",
                "img": "mp4.png",
                "description": "A widely used video format optimized for streaming."
            },
            {
                "step": 4,
                "name": "MKV",
                "img": "mkv.png",
                "description": "MKV is a versatile multimedia container format supporting multiple video, audio, and subtitle tracks."
            },
            {
                "step": 5,
                "name": "HEVC",
                "img": "hevc_h.265.png",
                "description": "High-Efficiency Video Coding for better compression."
            },
            {
                "step": 6,
                "name": "8K UltraHD",
                "img": "8k.png",
                "description": "The latest high-definition standard for ultra-clear visuals."
            }
        ]
    },
    {
        "name": "Image Formats",
        "tooltip": "Image.png",
        "points": 15,
        "difficulty": "hard",
        "description": "The evolution of image file formats from early bitmaps to modern compression techniques.",
        "steps": [
            {
                "step": 1,
                "name": "BMP",
                "img": "bmp.png",
                "description": "A raw image format with no compression."
            },
            {
                "step": 2,
                "name": "GIF",
                "img": "gif.png",
                "description": "A format supporting simple animations."
            },
            {
                "step": 3,
                "name": "JPEG",
                "img": "jpg.png",
                "description": "A compressed image format balancing quality and size."
            },
            {
                "step": 4,
                "name": "PNG",
                "img": "png.png",
                "description": "A lossless image format supporting transparency."
            },
            {
                "step": 5,
                "name": "WebP",
                "img": "webp.png",
                "description": "A modern image format optimizing quality and size."
            },
            {
                "step": 6,
                "name": "AVIF",
                "img": "avif.png",
                "description": "AVIF is a modern image format offering better compression and quality than JPEG and WebP."
            }
        ]
    },
    {
        "name": "CMS Evolution",
        "tooltip": "CMS.png",
        "points": 15,
        "difficulty": "hard",
        "description": "The rise of content management systems from early PHP-based systems to AI-driven platforms.",
        "steps": [
            {
                "step": 1,
                "name": "PHP-Nuke",
                "img": "php_nuke.png",
                "description": "An early CMS focused on dynamic content management."
            },
            {
                "step": 2,
                "name": "WordPress",
                "img": "wp.png",
                "description": "The most popular CMS for blogs and websites."
            },
            {
                "step": 3,
                "name": "Drupal",
                "img": "drupal.png",
                "description": "A flexible and modular CMS for complex web applications."
            },
            {
                "step": 4,
                "name": "Shopify",
                "img": "shopify.png",
                "description": "A leading e-commerce CMS for online stores."
            },
            {
                "step": 5,
                "name": "Sanity",
                "img": "sanity.png",
                "description": "Sanity is a headless CMS focused on real-time content management and structured data."
            },
            {
                "step": 6,
                "name": "Wix",
                "img": "wix.png",
                "description": "A no-code website builder with AI-powered design."
            }
        ]
    },
    {
        "name": "Database Evolution",
        "tooltip": "DB.png",
        "points": 15,
        "difficulty": "hard",
        "description": "The development of database management systems from simple text storage to blockchain.",
        "steps": [
            {
                "step": 1,
                "name": "CSV",
                "img": "csv.png",
                "description": "A simple format for storing structured data in plain text."
            },
            {
                "step": 2,
                "name": "IBM IMS",
                "img": "ibm_ims.png",
                "description": "One of the first hierarchical database management systems."
            },
            {
                "step": 3,
                "name": "MySQL",
                "img": "mysql.png",
                "description": "A popular relational database system used in web applications."
            },
            {
                "step": 4,
                "name": "NoSQL",
                "img": "nosql.png",
                "description": "Designed for large-scale, distributed data storage."
            },
            {
                "step": 5,
                "name": "New SQL",
                "img": "newsql.png",
                "description": "Relational databases with NoSQL scaling capabilities."
            },
            {
                "step": 6,
                "name": "BigchainDB",
                "img": "bigchainDB.png",
                "description": "A blockchain-based database for secure, immutable records."
            }
        ]
    }
  ]; 
  
  function getAvailableLevel1Techs(difficulty) {
    return evolutions
      .filter(evo => {
        return (
          evo.difficulty === difficulty ||
          (difficulty === "medium" && evo.difficulty === "easy") ||
          (difficulty === "hard" && evo.difficulty !== "hard")
        );
      })
      .flatMap(evo => evo.steps.filter(step => step.step === 1));
  }
  
  let playerName = ""; // store the player name
  
  function startGame(levelKey) {
    const usernameInput = document.querySelector("#usernameInput").value.trim();
    if (!usernameInput) {
      const errorElement = document.querySelector("#usernameError") || createErrorElement();
      errorElement.textContent = "Please enter your name before starting the game.";
      errorElement.style.display = "block";
      return;
    }
    playerName = usernameInput;
  
    currentLevel = levels[levelKey];
    score = 0;
    document.querySelector(".menu").classList.add("hidden");
    document.querySelector(".game").classList.remove("hidden");
  
    // Display player name on the screen
    document.querySelector("#playerName").textContent = `Player: ${playerName}`;
  
    const board = document.querySelector("#board");
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${currentLevel.cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${currentLevel.rows}, 1fr)`;
  
    // Fill board 
    for (let row = 0; row < currentLevel.rows; row++) {
      for (let col = 0; col < currentLevel.cols; col++) {
        const index = row * currentLevel.cols + col;
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index;
        cell.dataset.row = row;
        cell.dataset.col = col;
        board.appendChild(cell);
      }
    }
  
    // initial techs
    const techs = getAvailableLevel1Techs(levelKey);
    const emptyIndexes = Array.from({ length: currentLevel.cols * currentLevel.rows }, (_, i) => i);
    for (let i = 0; i < currentLevel.startItems; i++) {
      const randIndex = emptyIndexes.splice(Math.floor(Math.random() * emptyIndexes.length), 1)[0];
      const randomTech = techs[Math.floor(Math.random() * techs.length)];
      const cell = board.children[randIndex];
  
      cell.innerHTML = `<img src="assets/logos/${randomTech.img}" alt="${randomTech.name}" />`;
      cell.dataset.level = 1;
      cell.dataset.tech = randomTech.name;
    }
  
    document.querySelector("#score").textContent = `Score: ${score}`;
    document.querySelector("#timer").textContent = `Time: ${currentLevel.time}:00`;
  }
  
  // function to create error element
  function createErrorElement() {
    const errorElement = document.createElement("div");
    errorElement.id = "usernameError";
    errorElement.style.color = "red";
    errorElement.style.marginTop = "5px";
    const usernameInput = document.querySelector("#usernameInput");
    usernameInput.parentNode.insertBefore(errorElement, usernameInput.nextSibling);
    return errorElement;
  }
  
  function generateRandomTech(levelKey) {
    const techs = getAvailableLevel1Techs(levelKey);
    const randomTech = techs[Math.floor(Math.random() * techs.length)];
    return randomTech;
  }
  
  document.querySelector("#board").addEventListener("click", e => {
    const cell = e.target.closest(".cell");
    if (!cell) return;
  
    // Level 6 tech
    if (cell.dataset.tech && parseInt(cell.dataset.level) === 6) {
      const difficulty = getCurrentDifficultyKey();
      let points = 0;
      if (difficulty === "easy") points = 5;
      else if (difficulty === "medium") points = 10;
      else if (difficulty === "hard") points = 15;
  
      score += points;
      document.querySelector("#score").textContent = `Score: ${score}`;
  
      cell.innerHTML = "";
      delete cell.dataset.tech;
      delete cell.dataset.level;
      return;
    }
  
    // generate random tech
    if (!cell.dataset.tech) {
      const randomTech = generateRandomTech(getCurrentDifficultyKey());
      cell.innerHTML = `<img src="assets/logos/${randomTech.img}" alt="${randomTech.name}" />`;
      cell.dataset.level = 1;
      cell.dataset.tech = randomTech.name;
      return;
    }
  
    // Select/diselect logic
    if (!selectedCell) {
      selectedCell = cell;
      cell.classList.add("selected");
      return;
    }
  
    if (selectedCell === cell) {
      selectedCell.classList.remove("selected");
      selectedCell = null;
      return;
    }
  
    // Attempt to merge
    if (canMerge(selectedCell, cell)) {
      const nextTech = getNextTech(selectedCell.dataset.tech);
      if (nextTech) {
        selectedCell.innerHTML = `<img src="assets/logos/${nextTech.img}" alt="${nextTech.name}" />`;
        selectedCell.dataset.tech = nextTech.name;
        selectedCell.dataset.level = parseInt(selectedCell.dataset.level) + 1;
  
        cell.innerHTML = "";
        delete cell.dataset.tech;
        delete cell.dataset.level;
  
        spawnRandomTech(getCurrentDifficultyKey());
  
        selectedCell.classList.remove("selected");
        selectedCell = null;
      }
    } else {
      selectedCell.classList.remove("selected");
      selectedCell = null;
    }
  });
  
  document.querySelector("#drawButton").addEventListener("click", () => {
    drawRandomTech();
  });
  
  function drawRandomTech() {
    const emptyCells = [...document.querySelectorAll(".cell")].filter(cell => !cell.dataset.tech);
 
    if (emptyCells.length === 0) return;
  
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    const randomTech = generateRandomTech(getCurrentDifficultyKey());
 
    randomCell.innerHTML = `<img src="assets/logos/${randomTech.img}" alt="${randomTech.name}" />`;
    randomCell.dataset.level = 1;
    randomCell.dataset.tech = randomTech.name;
  }
  
  function getCurrentDifficultyKey() {
    for (let key in levels) {
      if (levels[key] === currentLevel) return key;
    }
    return "easy"; 
  }
  
  let selectedCell = null;
  
  function canMerge(cell1, cell2) {
    if (cell1.dataset.tech !== cell2.dataset.tech) return false;
    if (cell1.dataset.level !== cell2.dataset.level) return false;
    return true; 
  }
  
  function getNextTech(currentName) {
    for (let evo of evolutions) {
      const index = evo.steps.findIndex(s => s.name === currentName);
      if (index !== -1 && index < evo.steps.length - 1) {
        return evo.steps[index + 1];
      }
    }
    return null;
  }
  
  function spawnRandomTech(levelKey) {
    const emptyCells = [...document.querySelectorAll(".cell")].filter(c => !c.dataset.tech);
    if (emptyCells.length === 0) return;
    const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const tech = generateRandomTech(levelKey);
    cell.innerHTML = `<img src="assets/logos/${tech.img}" alt="${tech.name}" />`;
    cell.dataset.level = 1;
    cell.dataset.tech = tech.name;
  }
  
  let hoverTimer;
  let hoveredCell = null;
  
  document.querySelector("#board").addEventListener("mouseover", e => {
    let cell = e.target.closest(".cell");
    if (!cell || !cell.dataset.tech) return;
    console.log("Hovering on", cell.dataset.tech);
  
    const techName = cell.dataset.tech;
    const tech = getTechByName(techName);
    if (!tech) return;
  
    hoverTimer = setTimeout(() => {
      showTooltip(cell, tech);
    }, 3000);
  });
  
  document.querySelector("#board").addEventListener("mouseout", e => {
    let cell = e.target.closest(".cell");
    if (!cell || !cell.dataset.tech) return;
  
    clearTimeout(hoverTimer);
    hideTooltip();
  });
  
  function showTooltip(cell, tech) {
    const tooltip = document.querySelector("#tooltip");
    
    const tooltipName = document.querySelector("#tooltipName");
    const tooltipDescription = document.querySelector("#tooltipDescription");
    const tooltipImage = document.querySelector("#tooltipImage");
  
    tooltipName.textContent = tech.name;
    tooltipDescription.textContent = tech.description;
  
    tooltipImage.src = `assets/evolutions/${getEvolutionByTechName(tech.name)?.tooltip || "default.png"}`;
  
    const rect = cell.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + 20}px`;
    tooltip.style.top = `${rect.top + window.scrollY + 20}px`;
  
    tooltip.style.display = "block";
  
    console.log("Showing tooltip for:", tech.name);
  }
  
  function hideTooltip() {
    const tooltip = document.querySelector("#tooltip");
    tooltip.style.display = "none";
  }
  
  function getEvolutionByTechName(techName) {
    return evolutions.find(evo => evo.steps.some(step => step.name === techName));
  }
  
  function getTechByName(name) {
    for (let evo of evolutions) {
      const tech = evo.steps.find(step => step.name === name);
      if (tech) return tech;
    }
    return null;
  }