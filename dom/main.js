import $ from "jquery";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "paginationjs/dist/pagination.css";
import "./style.css";
import { getUsers } from "./services";
import { renderUsers } from "./render";

getUsers().then(({ data }) => {
    renderUsers(".list-user tbody", data);
});
