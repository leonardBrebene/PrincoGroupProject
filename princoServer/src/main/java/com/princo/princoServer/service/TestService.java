package com.princo.princoServer.service;
import java.util.List;


import com.princo.princoServer.entity.Test2;
import com.princo.princoServer.repository.TestRepo2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    
    @Autowired
    private TestRepo2 repo2;


    public List <Test2> saFacemUnTestInnerJoin(){
        return repo2.findInnerJoin();
    }

}
