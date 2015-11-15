<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Main extends CI_Controller
{
    public function index()
    {
        $this->load->view('includes/header');
        $this->load->view('includes/main-banner');
        $this->load->view('includes/main-center');
        $this->load->view('includes/main-bottom');
        $this->load->view('includes/footer');
    }

    public function documentation(){
        $this->load->view('includes/header');
        $this->load->view('includes/doc/structure');
        $this->load->view('includes/footer');
    }

}
