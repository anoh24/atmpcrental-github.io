package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationDto;
import com.example.rentalApp.RentalApplication.dto.BranchAdminRoomRegistrationResponseDto;
import com.example.rentalApp.RentalApplication.entity.BranchAdminRoomRegistrationEntity;
import com.example.rentalApp.RentalApplication.mapper.BranchAdminRoomRegistrationMapper;
import com.example.rentalApp.RentalApplication.repository.BranchAdminRoomRegistrationRepository;
import com.example.rentalApp.RentalApplication.service.BranchAdminRoomRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BranchAdminRoomRegistrationServiceImplementation implements BranchAdminRoomRegistrationService {

    private final BranchAdminRoomRegistrationRepository branchAdminRoomRegistrationRepository;
    private final BranchAdminRoomRegistrationMapper branchAdminRoomRegistrationMapper;

    @Autowired
    public BranchAdminRoomRegistrationServiceImplementation(
            BranchAdminRoomRegistrationRepository branchAdminRoomRegistrationRepository,
            BranchAdminRoomRegistrationMapper branchAdminRoomRegistrationMapper
    ){
        this.branchAdminRoomRegistrationRepository = branchAdminRoomRegistrationRepository;
        this.branchAdminRoomRegistrationMapper =   branchAdminRoomRegistrationMapper;
    }

    @Override
    public BranchAdminRoomRegistrationResponseDto AddRoom(BranchAdminRoomRegistrationDto dto){
        BranchAdminRoomRegistrationEntity entity = branchAdminRoomRegistrationMapper.toEntity(dto);
        BranchAdminRoomRegistrationEntity save = branchAdminRoomRegistrationRepository.save(entity);
        BranchAdminRoomRegistrationResponseDto responseDto = branchAdminRoomRegistrationMapper.toDto(save);
        responseDto.setMessage("Room added successfully");
        return responseDto;
    }

    @Override
    public Optional<BranchAdminRoomRegistrationResponseDto> getRoomId(Integer roomid){
        return branchAdminRoomRegistrationRepository.findById(roomid)
                .map(branchAdminRoomRegistrationMapper::toDto);
    }

    @Override
    public List<BranchAdminRoomRegistrationResponseDto> getAllRoom(){
        return branchAdminRoomRegistrationRepository.findAll()
                .stream()
                .map(branchAdminRoomRegistrationMapper::toDto)
                .collect(Collectors.toList());
    }
}
