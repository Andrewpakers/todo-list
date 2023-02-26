import css from "./style.css";
import {pageInit, createPopUp, closePopUp, refreshProjects} from "./display";
import {trackProjects} from './objects';
import initializeButtons from './buttons';

pageInit();

// initialize buttons
initializeButtons();