<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import {
    Wrapper,
    Navbar,
    WebDialog,
    PaintingDialog,
    PaintingOverlay,
    TopNavbarLink,
    NavToggle,
    NavName,
    IntroWrapper,
    Section,
    PanelsWrapper,
    Panel,
    Footer,
    ArrowUp,
  } from './Components';

  import { VApp, VBtn, VNavigationDrawer, VList, VListItem, VIcon } from 'vuetify/components'

  const currentYear = new Date().getFullYear();
  const scrollDistanceLargeThan100 = ref(false);

  const checkScroll = () => {
    if (!showPaintingDialog.value && !showWebDialog.value) {
      scrollDistanceLargeThan100.value = window.scrollY > 100;
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
  if (!showPaintingDialog.value) return;
  
  if (e.key === 'ArrowLeft') {
    showPreviousPainting();
  } else if (e.key === 'ArrowRight') {
    showNextPainting();
  } else if (e.key === 'Escape') {
    showPaintingDialog.value = false;
  }
};

  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
    window.removeEventListener('keydown', handleKeydown);
  });

  const onScrollDownClick = () => {
    const offsetTop = document.getElementById('about-me')?.offsetTop;
    window.scroll({ top: offsetTop - 72, behavior: 'smooth' });
  };


  const showPaintingDialog = ref(false);

  interface Painting {
    src: string;
    position?: string;
    size?: string;
  }

  const selectedPainting = ref<Painting | null>(null);
  const currentPaintingIndex = ref(0);

  const onOpenPaintingModalClick = (painting: any) => {
    selectedPainting.value = painting;
    currentPaintingIndex.value = paintings.findIndex(p => p.src === painting.src);
    showPaintingDialog.value = true;
  };

  const showPreviousPainting = () => {
    if (currentPaintingIndex.value > 0) {
      currentPaintingIndex.value --;
      selectedPainting.value = paintings[currentPaintingIndex.value];
    }
  };

  const showNextPainting = () => {
    if (currentPaintingIndex.value < paintings.length - 1) {
      currentPaintingIndex.value ++;
      selectedPainting.value = paintings[currentPaintingIndex.value];
    }
  };

  const showRightNavBar = ref(false);
  const onHamburgerClick = () => {
    showRightNavBar.value = !showRightNavBar.value;
  };

  const onNavBarItemClick = (id: string) => {
    showRightNavBar.value = false;
    const element = document.getElementById(id);
    if (element) {
      window.scroll({ top: element.offsetTop - 72, behavior: 'smooth' });
    }
  };

  const showWebDialog = ref(false);
  const webUrl = ref('');
  const openWebDialog = (url: string) => {
    webUrl.value = url;
    showWebDialog.value = true;
  };

  const paintings =[
    {
      src: '/images/peacock.jpg',
      position: '55% 35%',
      size: '230%',
    },
    {
      src: '/images/butterfly.png',
    },
    {
      src: '/images/sunshine.jpg',
    },
    {
      src: '/images/2017horti.jpg',
      position: '19% 96%',
      size: '369%'
    },
    {
      src: '/images/kura-and-tora-square.jpg',
    },
    {
      src: '/images/didi.png',
      position: '50% 18%',
      size: '135%'
    },
    {
      src: '/images/flowers.jpg',
    },
    {
      src: '/images/hedgehog.jpg',
    },
    {
      src: '/images/fox.jpg',
    },
    {
      src: '/images/falling.jpg',
    },
  ];

  const onScrollTopClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };
</script>



<template>
  <v-app>
  <Wrapper>
  <header>
    <Navbar :changed="scrollDistanceLargeThan100">
      <NavName :changed="scrollDistanceLargeThan100">Chia-He Chiu</NavName>
      <div class="top-navbar">
        <TopNavbarLink :changed="scrollDistanceLargeThan100" @click="onNavBarItemClick('about-me')">
          About Me
        </TopNavbarLink>
        <TopNavbarLink :changed="scrollDistanceLargeThan100" @click="onNavBarItemClick('project')">
          Project
        </TopNavbarLink>
        <TopNavbarLink :changed="scrollDistanceLargeThan100" @click="onNavBarItemClick('gallery')">
          Gallery
        </TopNavbarLink>
        <NavToggle
          class="nav-toggle"
          :icon="`fas fa-bars`"
          :changed="scrollDistanceLargeThan100"
          @click="onHamburgerClick"
        />
      </div>
    </Navbar>

    <v-navigation-drawer
      v-model="showRightNavBar"
      location="right"
      temporary
      width="300"
    >
      <v-list>
        <v-list-item
          class="text-white"
          @click="onNavBarItemClick('about-me')"
        >
          About Me
        </v-list-item>

        <v-list-item
          class="text-white"
          @click="onNavBarItemClick('project')"
        >
          Project
        </v-list-item>

        <v-list-item
          class="text-white"
          @click="onNavBarItemClick('gallery')"
        >
          Gallery
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <IntroWrapper>
      <div class="inner">
        <h2>Hi, I'm Chia-He Chiu</h2>
        <h4>Front-End Web Developer</h4>
        <img
          class="arrow-down"
          src="/images/icon/arrow_down.svg"
          @click="onScrollDownClick"
        />
      </div>
    </IntroWrapper>
  </header>

  <main>
    <Section id="about-me">
      <h2>About Me</h2>
      <div class="row">
        <div class="col-about-me-photo">
          <img
            class="my-photo"
            src="/images/DSC_0778.jpg"
            alt="Chia-He Chiu"
          />
        </div>
        <div class="col-about-me-text">
          <h4>Chia-He Chiu / 邱佳禾</h4>
          <p class="align-left">
            我畢業於台灣大學園藝暨景觀學系，大三時修了網頁設計的課程，開啟了對網頁開發的興趣。
            <br />
           
          </p>
          <br />
          <a href="https://github.com/didibear5" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="/images/icon/GitHub.svg" alt="github">
          </a>
          <a href="https://www.linkedin.com/in/chia-he-chiu-92676816a" target="_blank" rel="noopener noreferrer">
            <img class="icon" src="/images/icon/In.svg" alt="linkedin">
          </a>
          <div class="d-flex align-center mt-2">
            <v-icon
              icon="fas fa-phone" size="x-small"
            ></v-icon>
            <div class="ml-2">0963 525 305</div>
          </div>
          <div class="d-flex align-center">
            <v-icon
              icon="fas fa-envelope" size="x-small"
            ></v-icon>
            <div class="ml-2">box5151@gmail.com</div>
          </div>
        </div>
      </div>
    </Section>

    <Section id="project">
      <h2>Project</h2>
      <div class="row">
        <div class="col-project-text">
          <h4 class="mb-2">GPT 前端介面</h4>
          <p class="align-left">保有隱私的輕量級聊天室</p>
          <p class="align-left">
            我主要負責介面設計與前端的部分。系統框架為Django，使用語言主要有JavaScript、jQuery、Python。
          </p>
        </div>
        <div class="col-project-photo">
          <img
            class="project-img"
            src="/images/test.gif"
            alt="meowmeowchat"
          />
        </div>
      </div>
      <div class="row py-12" style="background: #ffffff;">
        <div class="col-project-text">
          <h4 class="mb-2">繪圖比賽活動頁面</h4>
          <p class="align-left">保有隱私的輕量級聊天室</p>
          <p class="align-left">
            我主要負責介面設計與前端的部分。系統框架為Django，使用語言主要有JavaScript、jQuery、Python。
          </p>
          <v-btn
            class="btn"
            href="https://webapp.localbond.tw/events/sinyi-kidsArtContest-2023"
            target="_blank"
            variant="outlined"
            :ripple="false"
          >
            Demo
          </v-btn>
        </div>
        <div class="col-project-photo">
          <img
            class="project-img"
            src="/images/kids-art-contest.png"
            alt="meowmeowchat"
          />
        </div>

      </div>
      <div class="row py-12">
        <div class="col-project-text">
          <h4 class="mb-2">小遊戲</h4>
          <p class="align-left">保有隱私的輕量級聊天室</p>
          <p class="align-left">
            我主要負責介面設計與前端的部分。系統框架為Django，使用語言主要有JavaScript、jQuery、Python。
          </p>
          <v-btn
            class="btn"
            @click="openWebDialog('https://sy-game-demo.web.app/?game=moon-festival-game')"
            variant="outlined"
            :ripple="false"
          >
            Demo 1
          </v-btn>
          <v-btn
            class="btn ml-2"
            @click="openWebDialog('https://sy-game-demo.web.app/?game=moon-festival-draw-item')"
            variant="outlined"
            :ripple="false"
            >
            Demo 2
          </v-btn>
          <WebDialog v-model="showWebDialog" :max-width="400">
            <div class="dialog-cross" @click="showWebDialog = false">
              <v-icon icon="fas fa-xmark" color="white"></v-icon>
            </div>
            <iframe :src="webUrl" style="width: 100%; height: 100vh; border: none;"></iframe>
          </WebDialog>
        </div>
        <div class="col-project-photo">
          <img
            class="project-img"
            src="/images/game-demo.png"
            alt="meowmeowchat"
          />
        </div>
      </div>
    </Section>
  
    <Section id="gallery">
      <h2>Gallery</h2>
      <PanelsWrapper>
        <Panel
          v-for="painting in paintings"
          :key="painting.src"
          :background="painting.src"
          :position="painting.position"
          :size="painting.size"
          @click="onOpenPaintingModalClick(painting)"
        ></Panel>
      </PanelsWrapper>

      <PaintingDialog class="test">
        <PaintingOverlay v-model="showPaintingDialog" class="align-center justify-center">
          <div class="dialog-container">
            <div class="dialog-cross" @click="showPaintingDialog = false">
              <v-icon icon="fas fa-xmark" color="white"></v-icon>
            </div>
            <img 
              v-if="selectedPainting"
              :src="selectedPainting.src"
              class="dialog-image"
            />
          </div>
        </PaintingOverlay>
        <v-icon
          v-if="showPaintingDialog"
          icon="fas fa-angle-left"
          class="navigation-btn left-btn"
          :disabled="currentPaintingIndex === 0"
          @click="showPreviousPainting"
          size="50px"
        ></v-icon>
        <v-icon
          v-if="showPaintingDialog"
          icon="fas fa-angle-right"
          class="navigation-btn right-btn"
          :disabled="currentPaintingIndex === paintings.length - 1"
          @click="showNextPainting"
          size="50px"
        ></v-icon>

      </PaintingDialog>
    </Section>

      <Footer>
        <ArrowUp
          :visible="scrollDistanceLargeThan100"
          src="images/icon/arrow_up.svg"
          @click="onScrollTopClick"
        />
        <p>Copyright © {{ currentYear }} by Chia-He Chiu.</p>
      </Footer>
  </main>


</Wrapper>
</v-app>
</template>

<style scoped>
.position-relative {
  position: relative;
}

:deep(.v-navigation-drawer) {
  background-color: #9e9ebb !important;
}

:deep(.v-list-item:hover) {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>