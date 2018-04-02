'use strict'

var express = require('express');
var router = express.Router();

router.post('/getAddress',(req,res)=>{
    var reqObj = req.body;

        req.getConnection((err,conn)=>{
            if(err){
                console.log(err);
                res.json({"msg":err});
            }else{
                var sql = "SELECT * FROM details WHERE user_id='"+reqObj.user_id+"'";
                conn.query(sql,(err,result)=>{
                    if(err){
                        res.json({"var_code":"0","msg":err,"result":[]});
                    }else{
                        res.json({"var_code":"1","msg":"data","result":result});
                    }
                });
                 
            }
        });

});

router.post('/update_ppd',(req,res)=>{
    var reqObj = req.body;

        req.getConnection((err,conn)=>{
            if(err){
                console.log(err);
                res.json({"msg":err});
            }else{
                var data= {
                    "point_per_dollar":reqObj.point_per_dollar
                }
                conn.query("UPDATE rewards SET ? WHERE reward_id = '"+reqObj.reward_id+"'",data,(err,result)=>{
                    if(err){
                        res.json({"var_code":"0","msg":err,"result":[]});
                    }else{
                        res.json({"var_code":"1","msg":"data update","result":result});
                    }
                });
            }
        });
});

router.post('/update_min_redeem',(req,res)=>{
    var reqObj = req.body;
        req.getConnection((err,conn)=>{
            if(err){
                console.log(err);
                res.json({"msg":err});
            }else{
                var data= {
                    "minredeempoints":reqObj.minredeempoints
                  
                }
                conn.query("UPDATE rewards SET ? WHERE reward_id = '"+reqObj.reward_id+"'",data,(err,result)=>{
                    if(err){
                        res.json({"var_code":"0","msg":err,"result":[]});
                    }else{
                        res.json({"var_code":"1","msg":"data update","result":result});
                    }
                });
            }
        });
});

router.post('/get',(req,res)=>{
    var reqObj = req.body;

        req.getConnection((err,conn)=>{
            if(err){
                console.log(err);
                res.json({"msg":err});
            }else{
                conn.query("SELECT * FROM rewards LIMIT 0,1",(err,result)=>{
                    if(err){
                        res.json({"var_code":"0","msg":err,"result":[]});
                    }else{
                        res.json({"var_code":"1","msg":"data update","result":result});
                    }
                });
            }
        });
});

router.post('/update_points',(req,res)=>{
    var reqObj = req.body;
        req.getConnection((err,conn)=>{
            if(err){
                console.log(err);
                res.json({"msg":err});
            }else{
                
                var data= {
                    "points":reqObj.points
                }
                conn.query("UPDATE signup SET ? WHERE user_id = '"+reqObj.user_id+"'",data,(err,result)=>{
                    if(err){
                        res.json({"var_code":"0","msg":err,"result":[]});
                    }else{
                        res.json({"var_code":"1","msg":"data update","result":result});
                    }
                });
            }
        });
});

module.exports = router;