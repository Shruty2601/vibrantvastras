package com.app.service;

import com.app.dto.UserDTO;
import java.util.List;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);
    UserDTO getUserById(int userId);
    List<UserDTO> getAllUsers();
    UserDTO updateUser(int userId, UserDTO userDTO);
    void deleteUser(int userId);
}
