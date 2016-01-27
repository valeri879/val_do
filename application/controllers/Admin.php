<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Admin extends CI_Controller
{

    public function index()
    {
        $this->load->view('includes/header');
        $this->load->view('includes/main-banner');
        $this->load->view('includes/main-center');
        $this->load->view('includes/footer');
    }

    public function login()
    {
        $this->load->view('includes/header');
        $this->load->view('admin/includes/login');
        $this->load->view('includes/main-bottom');
        $this->load->view('includes/footer');

        $this->load->model('login');

        $data = array(
            'user' => $this->input->post('user'),
            'password' => $this->input->post('password')
        );

        $result = $this->login->enter($data);

        if($result == true) echo 'login';
        else echo "error";
    }


}
