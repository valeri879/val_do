<?php

class login extends CI_Model
{

    public function enter($data)
    {

        $this->db->select('*');
        $this->db->from('user');
        $this->db->where('user',$data['user']);
        $this->db->where('password',$data['password']);
        $this->db->limit(1);
		$query=$this->db->get();
		 
		if($query->num_rows()==1)
		{
			return true;
		}
		else
		{
			return false;
		}
    }
}