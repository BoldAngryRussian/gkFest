package controller;

import org.hibernate.validator.internal.util.privilegedactions.GetMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.WatermeterService;

@RestController
@RequestMapping("/v1/")
public class FestivalRestController {

    @Autowired
    WatermeterService watermeterService;

    @GetMapping(value = "/{id}")
    public @ResponseBody String get(@PathVariable("id") Long id)
    {
        return watermeterService.get(id).toString();
    }
}
