package com.app.dto;

import lombok.Data;
import java.util.Set;

@Data
public class RoleDTO {
    private int id;
    private String name;
    private Set<UserDTO> users;
}
