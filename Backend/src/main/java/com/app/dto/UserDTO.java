
package com.app.dto;

import lombok.Data;

@Data
public class UserDTO {
    private String name;
    private String email;
    private String password;
    private String address;
    private String gender;
    private String phone;
    private boolean active;
}

//package com.app.dto;
//
//import lombok.Data;
//import java.util.Date;
//import java.util.Set;
//
//@Data
//public class UserDTO {
//    private int userId;
//    private String name;
//    private String email;
//    private String password;
//    private String address;
//    private String gender;
//    private String phone;
//    private Date date;
//    private boolean active;
//    private Set<RoleDTO> roles;
//    private CartDTO cart;
//}
